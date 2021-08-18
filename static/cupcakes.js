/** @format */

async function getCupcakes() {
  let response = await axios.get("/api/cupcakes");
  cupcakeArr = response.data.cupcakes;
  for (let cupcake of cupcakeArr) {
    console.log(cupcake);
    $(".cupcake_list").append(
      `<li>Cupcake #${cupcake.id}, Flavor: ${cupcake.flavor}, Size: ${cupcake.size}, Rating: ${cupcake.rating} <img src=${cupcake.image}> </li>`
    );
  }
}

async function handleNewCupcake(evt) {
  const flavor = $("#new_flavor").val();
  const size = $("#new_size").val();
  const rating = $("#new_rating").val();
  const image = $("#new_image").val();

  new_cupcake = {
    flavor: flavor,
    size: size,
    rating: rating,
    image: image,
  };

  let response = await axios.post("/api/cupcakes", new_cupcake);
  $(".cupcake_list").empty();
  getCupcakes();
}

$("body").on("click", "#new_cupcake_submit", handleNewCupcake);
getCupcakes();
