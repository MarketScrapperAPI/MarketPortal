package main

import (
	"log"

	"github.com/joho/godotenv"

	"github.com/MarketScrapperAPI/MarketPortal/api"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Println("Error loading .env file")
	}

	// Start API
	a := api.New()
	err = a.Start()
	if err != nil {
		log.Fatalf("unable to start echo: %v", err)
	}
}
