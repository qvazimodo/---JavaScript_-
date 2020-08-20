const goods = [
  { titleImage: "img/prod_detals1.png", title: 'Mango T-shirt1', color: "Red", size: "XLL", unitPrice: "150", totalQuantity: "3", shipping: "FREE"   },
  { titleImage: "img/prod_detals2.png", title: 'Mango T-shirt2', color: "Black", size: "XL", unitPrice: "200", totalQuantity: "4", shipping: "FREE"  },
  { titleImage: "img/prod_detals3.png", title: 'Mango T-shirt3', color: "Red", size: "XLL", unitPrice: "150", totalQuantity: "6", shipping: "FREE"   },
  
];





const renderGoodsItem = (titleImage="", title="default", color="green", size="X", unitPrice="100", totalQuantity="0", shipping="FREE") => {
    let sum = 0;
    sum= parseInt(totalQuantity) * parseInt(unitPrice);
    return  `<br><div class="shopping_product"> <div class="prod_detals" style="width: 403px;"><img src=${titleImage} alt="prod_detals3"><div class="prod__detals"><a href="#"><h1>${title}</h1></a> <p>Color:<x> ${color}</x></p> <p>Size:<x> ${size}</x></p></div>  </div>  <div class="unit_price">$${unitPrice}</div> <div class="quantity"><input type="number" class="quantityNum" min="0" max="10" step="1" value= ${totalQuantity} style="height: 30px; width: 54px;"></div> <div class="shipping">${shipping}</div> <div class="subtotal"> $${sum}</div> <div class="action"><i class="fas fa-times-circle"></i></div></div>` ;
};

 var renderGoodsList = (list) => {
  var goodsList = list.map(item => renderGoodsItem(item.titleImage, item.title, item.color, item.size, item.unitPrice, item.totalQuantity, item.shipping));
  document.querySelector('.shopping_productt').innerHTML = goodsList.join('');
}

renderGoodsList(goods);

