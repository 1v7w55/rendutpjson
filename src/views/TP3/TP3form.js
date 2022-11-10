export default function componentDidMount() {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer my-token",
      "My-Custom-Header": "foobar",
    },
    body: JSON.stringify({
      brand: this.brands,
      model: this.models,
      years: this.years,
      kms: this.kms,
      price: this.prices,
    }),
  };
  fetch("http://localhost:5000/cars", requestOptions)
    .then((response) => response.json())
    .then((data) => this.setState({ postId: data.id }));

  function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);

    const value = data.get("brands");

    console.log({ value });
  }

  const form = document.querySelector("form");
  form.addEventListener("submit", handleSubmit);

  return (
    <form>
      <label brands="brands">brands</label>
      <input type="text" name="brands" id="brands" />

      <button type="submit">Submit</button>
    </form>
  );
}
