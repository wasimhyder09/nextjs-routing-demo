export default async function ReviewDetails({
  params,
}:  {
  params: Promise<{reviewId: string, productId: string}>;
}) {
  const {productId, reviewId} = (await params);
  if(!productId) {
    throw new Error(`No product found with id ${productId}`);
  }
  return <h1>Details about Product {productId} and review {reviewId}</h1>
}