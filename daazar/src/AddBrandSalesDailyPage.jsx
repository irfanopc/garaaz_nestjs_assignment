

import {
  Button,
  FormControl,
  Input,
  Select,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddBrandSalesDailyPage() {
  const navigator = useNavigate();

  const validationSchema = Yup.object().shape({
    brand: Yup.string().required("Brand is required"),
    totalOrders: Yup.number()
      .typeError("Total Orders must be a number")
      .required("Total Orders is required")
      .positive("Total Orders must be a positive number"),
    totalOrderValue: Yup.number()
      .typeError("Total Order Value must be a number")
      .required("Total Order Value is required")
      .positive("Total Order Value must be a positive number"),
    grossMarginPercentage: Yup.number()
      .typeError("Gross Margin Percentage must be a number")
      .required("Gross Margin Percentage is required")
      .min(0, "Gross Margin Percentage must be between 0 and 100")
      .max(100, "Gross Margin Percentage must be between 0 and 100"),
    transactionType: Yup.string().required("Transaction Type is required"),
  });

  const initialValues = {
    brand: "",
    totalOrders: "",
    totalOrderValue: "",
    grossMarginPercentage: "",
    transactionType: "",
  };

  const handleSubmit = (values) => {
    axios
      .post("http://localhost:5000/BrandSalesDaily", {
        brand: values.brand,
        totalOrders: parseInt(values.totalOrders),
        totalOrderValue: parseInt(values.totalOrderValue),
        grossMarginPercentage: parseInt(values.grossMarginPercentage),
        transactionType: values.transactionType,
        date: new Date(),
      })
      .then(() => {
        navigator("/get-brand-sales-daily");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Table variant="simple" w="100%" mx="auto">
            <Thead>
              <Tr>
                <Th>Brand</Th>
                <Th>Total Orders</Th>
                <Th>Total Order Value</Th>
                <Th>Gross Margin Percentage</Th>
                <Th>Transaction Type</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>
                  <Field name="brand">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.brand && form.touched.brand}
                      >
                        <Input {...field} id="brand" placeholder="Brand" />
                        <ErrorMessage name="brand" />
                      </FormControl>
                    )}
                  </Field>
                </Td>
                <Td>
                  <Field name="totalOrders">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.totalOrders && form.touched.totalOrders
                        }
                      >
                        <Input
                          {...field}
                          id="totalOrders"
                          placeholder="Total Orders"
                        />
                        <ErrorMessage name="totalOrders" />
                        </FormControl>
                         )}
                      </Field>
                </Td>
                <Td>
                  <Field name="totalOrderValue">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.totalOrderValue &&
                          form.touched.totalOrderValue
                        }
                      >
                        <Input
                          {...field}
                          id="totalOrderValue"
                          placeholder="Total Order Value"
                        />
                        <ErrorMessage name="totalOrderValue" />
                      </FormControl>
                    )}
                  </Field>
                </Td>
                <Td>
                  <Field name="grossMarginPercentage">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.grossMarginPercentage &&
                          form.touched.grossMarginPercentage
                        }
                      >
                        <Input
                          {...field}
                          id="grossMarginPercentage"
                          placeholder="Gross Margin Percentage"
                        />
                        <ErrorMessage name="grossMarginPercentage" />
                      </FormControl>
                    )}
                  </Field>
                </Td>
                <Td>
                  <Field name="transactionType">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.transactionType &&
                          form.touched.transactionType
                        }
                      >
                        <Select
                          {...field}
                          id="transactionType"
                          placeholder="Transaction Type"
                        >
                          <option value="Trading">Trading</option>
                          <option value="Facilitation ">Facilitation </option>
                        </Select>
                        <ErrorMessage name="transactionType" />
                      </FormControl>
                    )}
                  </Field>
                </Td>
                <Td>
                  <Button
                    type="submit"
                    colorScheme="blue"
                    isLoading={isSubmitting}
                  >
                    Add
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Form>
      )}
    </Formik>
  );
}

export default AddBrandSalesDailyPage;
