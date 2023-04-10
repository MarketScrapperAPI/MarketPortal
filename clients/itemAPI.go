package clients

import (
	"log"

	pb "github.com/MarketScrapperAPI/ItemAPI/proto/gen"
	"google.golang.org/grpc"
)

func NewItemAPIClient(apiUrl string, apiPort string) pb.ItemApiClient {

	var conn *grpc.ClientConn
	conn, err := grpc.Dial(apiUrl+":"+apiPort, grpc.WithInsecure())
	if err != nil {
		log.Fatalf("did not connect: %s", err)
	}
	//defer conn.Close()

	client := pb.NewItemApiClient(conn)

	return client
}
