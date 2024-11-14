import { Divider, Input, Tooltip } from "@mantine/core";
import { FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import { useOrganizationStore } from "../../../store";

type Props = {};

const validationSchema = Yup.object({
  organizationName: Yup.string().required("OrganizationName is required"),
  adminEmail: Yup.string().required("AdminEmail is required"),
});

const Home = (props: Props) => {
  const formik = useFormik({
    initialValues: {
      organizationName: "",
      adminEmail: "",
    },
    validationSchema,
    onSubmit: (values) => {
      // Handle form submission
    },
  });

  const {
    values,
    touched,
    errors,
    handleChange,
    handleSubmit,
    handleBlur,
    setFieldValue,
  } = formik;
  const { addingInfo, Organization } = useOrganizationStore();
  const handleAddOrganization = () => {
    addingInfo({
      id: Math.random(),
      OrganizationName: values.organizationName,
      adminEmail: values.adminEmail,
      label: values.organizationName,
    });
  };

  return (
    <>
      <div className="h-[85vh] flex justify-center items-center">
        <FormikProvider value={formik}>
          <form onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="organizationName"
                className="font-semibold text-sm"
              >
                New Organization Name
              </label>
              <Input
                name="organizationName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.organizationName}
                className="w-[500px]"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="font-semibold text-sm flex  items-center"
              >
                Customer Admin Email
                <Tooltip label="No email generated">
                  <span className="text-sm   mx-2 border border-black rounded-full p-1  w-4 h-4 flex items-center justify-center">
                    ?
                  </span>
                </Tooltip>
              </label>
              <div className="flex">
                <Input
                  name="adminEmail"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.adminEmail}
                  className="w-[500px]"
                />
                <div className="flex px-8 justify-between">
                  <button
                    className="bg-green-color px-6 border rounded-3xl  text-white font-medium"
                    onClick={handleAddOrganization}
                  >
                    Add
                  </button>
                  <button className="bg-[#535353] px-6 border rounded-3xl  text-white font-medium">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </form>
        </FormikProvider>
        <Divider my="md" />
      </div>

      {/* <Button
        onClick={() =>
          notifications.show({
            title: "Default notification",
            message: "Do not forget to star Mantine on GitHub! 🌟",
          })
        }
      >
        Show notification
      </Button> */}
      {/* <Notification title="We notify you that" className=" absolute">
        New Organization Added
      </Notification> */}
    </>
  );
};

export default Home;
