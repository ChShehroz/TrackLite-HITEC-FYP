import axios from "axios";

const handleSubmit = async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/v1/degree",
      data
    ); // Ensure the endpoint is correct

    console.log(response.data);

    // Handle the response data (e.g., show a success message, redirect, etc.)
  } catch (error) {
    console.error("Error submitting the form:", error);
    // Handle error (e.g., show an error message)
  }
};
