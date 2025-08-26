import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import Title from "../components/Title";
import ProductItems from "../components/ProductItems";


const Collection = () => {
  const { products ,search,showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProduct, setFilterProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType,setSortType] = useState ('relavent')

    // category
  const toggleCategory = (e) => {
    if(category.includes(e.target.value)){
      setCategory(prev => prev.filter(item =>item !==  e.target.value))
    }else{
      setCategory(prev => [...prev, e.target.value])
    }
  }

  //sub category
 const toggleSubcategory = (e) => {
  if(subCategory.includes(e.target.value)) {
    setSubCategory(prev => prev.filter(item =>item !==  e.target.value))
  }else{
    setSubCategory(prev => [...prev, e.target.value])
  }
 }

//  filter  

const applyFilter = () => {
  let productCopy = products.slice();
if(showSearch && search){
  productCopy = productCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
}


  if(category.length >0){
    productCopy = productCopy.filter(item => category.includes(item.category))
  }
  if(subCategory.length >0){
    productCopy = productCopy.filter(item => subCategory.includes(item.subCategory))
  }
setFilterProduct(productCopy)
}

//sort
const sortProducts = () =>{
  let fpCopy =filterProduct.slice();
  switch(sortType){
    case 'low-high':
      setFilterProduct(fpCopy.sort ((a,b)=>(a.price - b.price)));
      break;
    case 'high-low':
      setFilterProduct(fpCopy.sort ((a,b)=>(b.price - a.price)));
      break;
      default:
        applyFilter();
        break
  }
}

 useEffect(()=>{
  setFilterProduct   (products)
 },[])

 useEffect(()=>{sortProducts()},[sortType])



 useEffect(() =>{
  applyFilter()
 },[category, subCategory,showSearch,search] )
useEffect(()=>{
sortProducts()
},[sortType])  
  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* filter optoin  */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text0-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <img className={`h-3 sm:hidden `} src={assets.dropdown_icon} alt="" />
        </p>
        {/* catagori filter  */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text sm font-light text-gray-700 ">
            <p className="flex gap-2">
              <input
                type="checkbox"
                name=""
                id=""
                className="w-3"
                value={"Men"}
                onChange={toggleCategory}
              />
              Men
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                name=""
                id=""
                className="w-3"
                value={"Women"}
                onChange={toggleCategory}
              />
              Women
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                name=""
                id=""
                className="w-3"
                value={"Kids"}
                onChange={toggleCategory}
              />
              Kids
            </p>
          </div>
        </div>
        {/* subcategori filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text sm font-light text-gray-700 ">
            <p className="flex gap-2">
              <input
                type="checkbox"
                name=""
                id=""
                className="w-3"
                value={"Topwear"}
                onChange={toggleSubcategory}
              />
              Tob wear
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                name=""
                id=""
                className="w-3"
                value={"Bottomwear"}
                onChange={toggleSubcategory}
              />
              Bottem wear
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                name=""
                id=""
                className="w-3"
                value={"Winterwear"}
                onChange={toggleSubcategory}
              />
              winter wear
            </p>
          </div>
        </div>
      </div>
      {/* right side  */}
      <div className="flex-1">
        <div className="flex justify-between mb-4 sm:tex-2xl text-base">
          <Title text1={"ALL"} text2={"COLLECTIONS"} />
          <select onChange={(e)=>setSortType(e.target.value)} className="border-2 border-gray-300 text:sm px2">
            <option value="relavent">Sort by:Relavent</option>
            <option value="low-high">sort by: Low to High </option>
            <option value="high-low">sort by:High to low</option>
          </select>
        </div>
        {/* Map product */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProduct.map((item, index) => (
            <ProductItems
              key={index}
              image={item.image}
              _id={item._id}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Collection;
