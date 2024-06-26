import AddForm from "@/Components/AddForm";
import Layout from "@/Components/Layout";

function AddProduct(){
    return(
        <Layout>
            <div className="flex justify-center">
                <AddForm />
            </div>
        </Layout>
    )
}
export default AddProduct;