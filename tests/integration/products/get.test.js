test("should_fetch_product_list_successfully", async () => {
  const response = await fetch(
    "https://starsoft-challenge-7dfd4a56a575.herokuapp.com/v1/products",
  );
  expect(response.status).toBe(200);

  const responseBody = await response.json();

  expect(responseBody).toHaveProperty("data");
  expect(responseBody).toHaveProperty("metadata");
  expect(responseBody.data[0]).toHaveProperty("id");
});
