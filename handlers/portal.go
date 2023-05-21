package handlers

import (
	"github.com/labstack/echo/v4"
)

const PortalHTMLPath = "MarketPortal/dist/market-portal/"

type PortalHandler struct {
}

func NewPortalHandler() *PortalHandler {
	return &PortalHandler{}
}

func (h *PortalHandler) GetPortal(c echo.Context) error {
	return c.File(PortalHTMLPath + "index.html")
}
