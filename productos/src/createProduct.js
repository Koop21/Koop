
const products=[];
const idProduct=document.getElementById('code');
const descriptionProduct=document.getElementById('descripcion');
const valueProduct=document.getElementById('value');
const statusProduct=document.getElementById('estado');
const createBtn=document.getElementById('btn_submit');

function createProduct(event){
    const idText=idProduct.value;
    const descriptionText=descriptionProduct.value;
    const valueText=valueProduct.value;
    const statusText=statusProduct.value;

    const productObject={
        id:idText,
        description:descriptionText,
        value:valueText,
        status:statusText,
    }
    products.push(productObject);
}

//createBtn.addEventListener('click', createProduct);
export default createProduct;