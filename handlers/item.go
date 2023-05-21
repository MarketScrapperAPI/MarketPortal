package handlers

import (
	"context"
	"net/http"
	"strconv"

	pb "github.com/MarketScrapperAPI/ItemAPI/proto/gen"
	"github.com/labstack/echo/v4"
)

type ItemsHandler struct {
	itemAPIClient pb.ItemApiClient
}

func NewItemsHandler(itemAPIClient pb.ItemApiClient) *ItemsHandler {
	return &ItemsHandler{
		itemAPIClient: itemAPIClient,
	}
}

func (h *ItemsHandler) GetItems(c echo.Context) error {

	page, err := strconv.Atoi(c.QueryParam("page"))
	if err != nil {
		return c.JSON(http.StatusBadRequest, err.Error())
	}

	perPage, err := strconv.Atoi(c.QueryParam("perPage"))
	if err != nil {
		return c.JSON(http.StatusBadRequest, err.Error())
	}

	req := pb.ListItemsRequest{
		Pagination: &pb.PaginationRequest{
			Page:    int32(page),
			PerPage: int32(perPage),
		},
	}

	if c.QueryParam("name") != "" {
		req.Name = c.QueryParam("name")
	}

	if c.QueryParam("pricePerItemGreaterThan") != "" {
		pricePerItemGreaterThan, err := strconv.ParseFloat(c.QueryParam("pricePerItemGreaterThan"), 32)
		if err != nil {
			return c.JSON(http.StatusBadRequest, err.Error())
		}

		req.PricePerItemGreaterThan = float32(pricePerItemGreaterThan)
	}

	if c.QueryParam("pricePerItemLowerThan") != "" {
		pricePerItemLowerThan, err := strconv.ParseFloat(c.QueryParam("pricePerItemLowerThan"), 32)
		if err != nil {
			return c.JSON(http.StatusBadRequest, err.Error())
		}

		req.PricePerItemLowerThan = float32(pricePerItemLowerThan)
	}

	if c.QueryParam("sortBy") != "" {
		req.SortBy = c.QueryParam("sortBy")
	}

	if c.QueryParam("sortOrder") != "" {
		req.SortOrder = c.QueryParam("sortOrder")
	}

	rsp, err := h.itemAPIClient.ListItems(context.Background(), &req)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}

	return c.JSON(http.StatusOK, rsp)
}
