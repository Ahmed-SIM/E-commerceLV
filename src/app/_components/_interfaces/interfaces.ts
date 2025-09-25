export type ProductType={
id:string;
title:string;
imageCover:string;
description:string;
brand:BrandType;
category:CategoryType;
price:number;
ratingsAverage:number;
priceAfterDiscount?:number;

}


export type CategoryType ={
      _id: string,
      name: string,
      slug: string,
      image: string
    }

export type BrandType ={
      _id: string,
      name: string,
      slug: string,
      image: string
    }
