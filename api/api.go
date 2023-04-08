package api

import (
	"log"
	"os"

	"github.com/MarketScrapperAPI/MarketPortal/clients"
	"github.com/MarketScrapperAPI/MarketPortal/handlers"
	"github.com/labstack/echo/v4"
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

	e := echo.New()

	// Clients
	itemClient := clients.NewItemAPIClient(itemAPIHost)

	// handlers
	itemsHandler := handlers.NewItemsHandler(itemClient)

	g := e.Group("/v1")

	g.GET("/items", itemsHandler.GetItems)

	return &Api{
		echo: e,
	}
}

func (api *Api) Start() error {
	return api.echo.Start(":8080")
}
