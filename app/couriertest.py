from trycourier import Courier

client = Courier(auth_token="pk_prod_ETNP15SH5T4TZ0P3ZX3GKS1VSRD6")

resp = client.send(
    event="courier-quickstart",
    recipient="Google_111380623091334187830",
    data={
      "favoriteAdjective": "awesomeness"
    }
)

print(resp['messageId'])