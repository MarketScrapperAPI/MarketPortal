package clients

import (
	"log"

	pb "github.com/MarketScrapperAPI/ItemAPI/proto/gen"
	"google.golang.org/grpc"
)

func NewItemAPIClient(apiUrl string) pb.ItemApiClient {

	var conn *grpc.ClientConn
	conn, err := grpc.Dial(apiUrl+":50005", grpc.WithInsecure())
	if err != nil {
		log.Fatalf("did not connect: %s", err)
	}
	//defer conn.Close()

	client := pb.NewItemApiClient(conn)

	return client
}
