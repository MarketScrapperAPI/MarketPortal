package api

import (
	"log"
	"os"

	"github.com/MarketScrapperAPI/MarketPortal/clients"
	"github.com/MarketScrapperAPI/MarketPortal/handlers"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

type Api struct {
	echo *echo.Echo
}

func New() *Api {

	itemAPIHost := os.Getenv("ITEMAPI_HOST")
	log.Println("ITEMAPI_HOST: ", itemAPIHost)
	if itemAPIHost == "" {
		panic("ITEMAPI_HOST is not set")
	}

	itemAPIPort := os.Getenv("ITEMAPI_PORT")
	log.Println("ITEMAPI_PORT: ", itemAPIPort)
	if itemAPIPort == "" {
		panic("ITEMAPI_PORT is not set")
	}

	e := echo.New()

	// Middleware
	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"*"},
		AllowHeaders: []string{echo.HeaderOrigin, echo.HeaderContentType, echo.HeaderAccept},
	}))

	// Clients
	itemClient := clients.NewItemAPIClient(itemAPIHost, itemAPIPort)

	// Handlers
	itemsHandler := handlers.NewItemsHandler(itemClient)

	g := e.Group("/api/v1")

	g.GET("/items", itemsHandler.GetItems)

	return &Api{
		echo: e,
	}
}

func (api *Api) Start() error {
	return api.echo.Start(":8080")
}
