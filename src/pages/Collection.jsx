import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../../assets/frontend_assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem'

const Collection = () => {
  const {products,showSearch,search}=useContext(ShopContext);
  const [showFilter,setShowFilter]=useState(false)// filter ke options show krne ke liye bnaya gya hai 
const [filterProducts,setFilterProducts]=useState([])//filter wale products handel karega 
const [category,setCategory]=useState([])// filter ki category ko handerl krega 
const [subCategory,setSubCategory]=useState([])// filter ke type ki hnadling krega 
const [sortType,setSortType]=useState('relevant')

 //products sare lekr ayay hai context se 
 const toggleCategory =(e)=>{//jab category select krega to konsa  filter ya category chewckbox  ayega ya rehga uske liye
  if (category.includes(e.target.value)){
    setCategory(prev=>prev.filter(item=>item!==e.target.value))
  }
  else{
    setCategory(prev=>[...prev,e.target.value])
  }
 }
 const toggleSubCategory =(e)=>{//jab subCategory select krega to konsa  filter ya  subcategory   chacekbox ayega ya rehga uske liye
  if (subCategory.includes(e.target.value)){
    setSubCategory(prev=>prev.filter(item=>item!==e.target.value))
  }
  else{
    setSubCategory(prev=>[...prev,e.target.value])
  }
 }


 const applyFilter=()=>{
  // jo handeling kri hai filter ki uske baad yha par data ko lekr save krega jo match krega 
  let productsCopy=products.slice();

  if(showSearch && search){
   productsCopy=productsCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
  }
    
  if(category.length>0){
    productsCopy=productsCopy.filter(item=>category.includes(item.category));
  }
  if(subCategory.length>0){
    productsCopy=productsCopy.filter(item=>subCategory.includes(item.subCategory));
  }
  setFilterProducts(productsCopy)// stefilter me save hojya sab filtered data 
 }

 

 useEffect(()=>{
  console.log(subCategory);
 },[subCategory])

 useEffect(()=>{
  console.log(category);
 },[category])

 useEffect(()=>{
  console.log(search);
  applyFilter();
 },[category, subCategory,search,showSearch])

 const sortProduct=()=>{
  let fpCopy=filterProducts.slice();

  switch(sortType){
    case 'low-high':
      setFilterProducts(fpCopy.sort((a,b)=>(a.price-b.price)));
      break;

      case 'high-low':
        setFilterProducts(fpCopy.sort((a,b)=>(b.price-a.price)));
        break;

        default:
          applyFilter();
          break;
  }
 }

 useEffect(()=>{
  sortProduct();
 },[sortType])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t' >
      {/* filters options */}
      <div className='min-w-60' >
        <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2' >FILTERS
          <img className={`h-3 sm:hidden 
            ${showFilter?'rotate-90':''} `} src={assets.dropdown_icon} alt="" />
        </p>
        {/* Category filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter?'':'hidden sm:block'}`} >
          <p className='mb-3 text-sm font-medium' >CATEGORIES</p>
          
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700 ' >
            <p className='flex gap-2' >
              <input type="checkbox" value={'Men'} onChange={toggleCategory} />Men
            </p>
            <p className='flex gap-2' >
              <input type="checkbox" value={'Women'} onChange={toggleCategory} />Women
            </p>
            <p className='flex gap-2' >
              <input type="checkbox" value={'Kids'} onChange={toggleCategory} />Kids
            </p>
          </div>
        </div>
        {/*SubCategory Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter?'':'hidden'}`} >
          <p className='mb-3 text-sm font-medium' >TYPE</p>
          
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700 ' >
            <p className='flex gap-2' >
              <input type="checkbox" value={'Topwear'} onChange={toggleSubCategory} />Topwear
            </p>
            <p className='flex gap-2' >
              <input type="checkbox" value={'Bottomwear'} onChange={toggleSubCategory} />BottomWear
            </p>
            <p className='flex gap-2' >
              <input type="checkbox" value={'Winterwear'} onChange={toggleSubCategory} />Winterwear
            </p>
          </div>
        </div>
      </div>
      {/*Right side */}
      <div className="flex-1" >
        <div className='flex justify-between text-base sm:text-2xl mb-4' >
          <Title text1={'All'} text2={'COLLECTIONS'} />
          {/*Product Sort */}
          <select onChange={(e)=>setSortType(e.target.value)} className="border-2 border-gray-300 text-sm px-2" id="">
             <option value="relavent"> Sort by: Relavent </option>
             <option value="low-high"> Sort by:Low to High </option>
             <option value="high-low"> Sort by:High to Low </option>

          </select>

        </div>

        {/* Map Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6' >
          {
            filterProducts.map((item,index)=>(
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
            ))
          }

        </div>
      </div>

      
    </div>
  )
}

export default Collection
