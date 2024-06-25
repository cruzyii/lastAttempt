import AddForm from "@/Components/AddForm";
import Layout from "@/Components/Layout";

function AddProduct(){
    return(
        <Layout>
            <div className="p-24">
                <AddForm />
            </div>
        </Layout>
    )
}
export default AddProduct;