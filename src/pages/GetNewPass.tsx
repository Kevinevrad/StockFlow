import { Component } from "react";
import { FormContainer } from "../components/customn/formContainer";
import { CustomCard } from "../components/customn/customCard";

export default class GetNewPass extends Component {
  render() {
    return (
      <FormContainer>
        <CustomCard
          title="Get New Password"
          description="Enter your email to receive a link to reset your password."
        >
          <form></form>
        </CustomCard>
      </FormContainer>
    );
  }
}
