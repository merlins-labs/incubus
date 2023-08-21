package collections

import "github.com/MERLINS/merlins-dapp/go/pkg/marketplacepb"

type CollectionsProvider interface {
	Collections(limit, offset int) chan *marketplacepb.Collection
}
