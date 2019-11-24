function _(id){
	return document.getElementById(id);
}
function $(obj){
	return document.getElementsByClassName(obj);
}
var name="world!!";
function welcomeTo() {
	name=prompt("Enter your name, Please!!");
	var diva=_("welcome");
	var image1=document.createElement("img");
	image1.setAttribute("id","wel1");
	image1.setAttribute("src","allImage/welcome.jpg");
	var image2=document.createElement("img");
	image2.setAttribute("id","wel2");
	image2.setAttribute("src","allImage/welcome.jpg");
	var mar=document.createElement("div");
	mar.setAttribute("id","marq");
	mar.innerHTML="<marquee>WEL-COME -- Mr. "+name.toUpperCase()+"</marquee>";
	var image3=document.createElement("img");
	image3.setAttribute("id","front");
	image3.setAttribute("src","allImage/front.jpeg");
	diva.appendChild(image2);
	diva.appendChild(image1);
	diva.appendChild(mar);
	diva.appendChild(image3);

}

function showMyProduct(obj){
	var n=products.length;
	_("welcome").style.display="none";
	if(!obj.classList.contains("open")){
		var hp=document.createElement("div");
		hp.setAttribute("id","hp")
		obj.classList.toggle("open");
		for(var i=0; i<products.length; i++){
			var a=document.createElement("div");
			a.setAttribute("class","productHome");
			a.setAttribute("id",products[i].name);
			a.setAttribute("onclick","myProduct("+i+")");
			a.innerText=products[i].name;
			hp.appendChild(a);
		}
		var a=document.createElement("div");
			a.setAttribute("class","productHome");
			a.setAttribute("id","new");
			a.innerText="new coming...";
			hp.appendChild(a);
		document.querySelector("#productHome").appendChild(hp);
		_("forToggle").innerHTML="Close MenuList";
	}

	else{
		obj.classList.toggle("open");
		document.getElementById("forToggle").innerHTML="Open MenuList";
		document.querySelector("#hp").remove(a);
		//document.getElementById("hp").style.display="none";
	}
}
function myProduct(pId){
	_("main").innerHTML="";
	_("main").style.display="block";
	_("backProduct").style.display="none";
	_("main2").style.display="none";
	var mai=_("main");
	var obj=pId;/*undefined*/
	var mainChild=document.createElement("div");
	mainChild.setAttribute("id","mainChild");
	for(var i=0; i<products[pId].items.length; i++){
		var data=products[pId].items[i];
		var object=document.createElement("div");
		object.setAttribute("class","div");

		if(data.image!=undefined){
			var image=document.createElement("img");
			image.setAttribute("src",data.image);
			image.setAttribute("class","imageP");
			image.setAttribute("onclick","myProductType("+i+","+obj+")");
			object.appendChild(image);
		}

		/*var image=document.createElement("img");
		image.setAttribute("src","click.jpeg");
		image.setAttribute("class","imageClick");
		image.setAttribute("onclick","myProductType("+i+","+obj+")");
		object.appendChild(image);*/

		if(data.name!=undefined){
			var div=document.createElement("div");
			div.setAttribute("class","divName");
			div.innerText=data.name;
			object.appendChild(div);
		}
		if(data.brand!=undefined){
			var div=document.createElement("div");
			div.setAttribute("class","divBrand");
			div.innerText="Brand- "+data.brand;
			object.appendChild(div);
		}
		/*if(data.discount!=undefined){
			var div=document.createElement("div");
			div.setAttribute("class","divDiscount");
			div.innerText="Discount- "+data.discount;
			object.appendChild(div);
		}
		if(data.price!=undefined){
			var div=document.createElement("div");
			div.setAttribute("class","divPrice");
			div.innerText="Price- "+data.price;
			object.appendChild(div);
		}
		if(data.author!=undefined){
			var div=document.createElement("div");
			div.setAttribute("class","divAuthor");
			div.innerText="Author- "+data.author;
			object.appendChild(div);
		}*/
		
		mainChild.appendChild(object);

	}
	mai.appendChild(mainChild);

}

function myProductType(a, pId){
	_("main").style.display="none";
	_("backProduct").style.display="block";
	for(var i=0; i<products[pId].items[a].type.length; i++){
	}
	_("main2").innerHTML="";
	var mai=_("main2");
	var mainChild2=document.createElement("div");
	mainChild2.setAttribute("id","mainChild2");
	for(var i=0; i<products[pId].items[a].type.length; i++){
		var data=products[pId].items[a].type[i];
		var object=document.createElement("div");
		object.setAttribute("class","div");

		if(data.image!=undefined){
			var image=document.createElement("img");
			image.setAttribute("src",data.image);
			image.setAttribute("class","imagePQ");
			object.appendChild(image);
		}

		var image=document.createElement("img");
		image.mydata=data
		image.setAttribute("src","allImage/cart.png");
		image.setAttribute("class","imageCart");
		image.setAttribute("onclick","selectAnyProduct(this.mydata)");
		object.appendChild(image);

		if(data.name!=undefined){
			var div=document.createElement("div");i
			div.setAttribute("class","divName");
			div.innerText=data.name;
			object.appendChild(div);
		}
		if(data.brand!=undefined){
			var div=document.createElement("div");
			div.setAttribute("class","divBrand");
			div.innerText="Brand- "+data.brand;
			object.appendChild(div);
		}
		if(data.discount!=undefined){
			var div=document.createElement("div");
			div.setAttribute("class","divDiscount");
			div.innerText="Discount- "+data.discount;
			object.appendChild(div);
		}
		if(data.price!=undefined){
			var div=document.createElement("div");
			div.setAttribute("class","divPrice");
			div.innerText="Price- "+data.price;
			object.appendChild(div);
		}
		if(data.author!=undefined){
			var div=document.createElement("div");
			div.setAttribute("class","divAuthor");
			div.innerText="Author- "+data.author;
			object.appendChild(div);
		}
		
		mainChild2.appendChild(object);

	}
	mai.appendChild(mainChild2);
	_("main2").style.display="block";

}

function goToParentProduct(){
	_("main2").style.display="none";
	_("main").style.display="block";
	_("backProduct").style.display="none";
}

function selectAnyProduct(obj){
	var diva=_("addToCart");
	diva.innerHTML="";
	var cov=document.createElement("div"); //for cover;
	cov.setAttribute("id","cover");
	_("likeBody").appendChild(cov);

	var data=obj;
	diva.style.left="25%";
	_("cover").style.display="block";

	var bbutton=document.createElement("div");
	bbutton.setAttribute("id","backTheCnfCart");
	bbutton.setAttribute("onclick","backConfirmCart()");
	bbutton.innerText="Back";
	diva.appendChild(bbutton);

	var cCbutton=document.createElement("div");
	cCbutton.setAttribute("id","cnfCnfCart");
	cCbutton.data=data;
	cCbutton.setAttribute("onclick","addConfirmInCart(this.data)");
	cCbutton.innerText="Confirm";
	diva.appendChild(cCbutton);


	var object1=document.createElement(div);
	object1.setAttribute("id","singleImg");
	var object2=document.createElement(div);
	object2.setAttribute("id","singleName");
		if(data.image!=undefined){
			var image=document.createElement("img");
			image.setAttribute("src",data.image);
			image.setAttribute("class","imageSel");
			object1.appendChild(image);
		}

		if(data.name!=undefined){
			var div=document.createElement("div");
			div.setAttribute("class","divName");
			div.innerText="Name- "+data.name;
			object2.appendChild(div);
		}
		if(data.brand!=undefined){
			var div=document.createElement("div");
			div.setAttribute("class","divBrand");
			div.innerText="Brand- "+data.brand;
			object2.appendChild(div);
		}
		if(data.discount!=undefined){
			var div=document.createElement("div");
			div.setAttribute("class","divDiscount");
			div.innerText="Discount- "+data.discount;
			object2.appendChild(div);
		}
		if(data.price!=undefined){
			var div=document.createElement("div");
			div.setAttribute("class","divPrice");
			div.innerText="Price- "+data.price;
			object2.appendChild(div);
		}
		if(data.author!=undefined){
			var div=document.createElement("div");
			div.setAttribute("class","divAuthor");
			div.innerText="Author- "+data.author;
			object2.appendChild(div);
		}
	var quantity = document.createElement("input");
		quantity.setAttribute("class","name");
		quantity.setAttribute("value","1");
		quantity.setAttribute("Type","number");
		quantity.setAttribute("id","quantity");
		//quantity.setAttribute("pattern","[0-9]{2}");
		quantity.setAttribute("min","1");
		object2.appendChild(quantity);
		
		diva.appendChild(object1);
		diva.appendChild(object2);
}

function backConfirmCart(){
	_("addToCart").style.left="-120%";
	_("cover").remove();
}

var myShopingCart=[];

function addConfirmInCart(obj){
	if(myShopingCart.includes(obj)){
		myShopingCart.pop(obj);
	}
	obj.quantity=_("quantity").value;
	myShopingCart.push(obj);
	backConfirmCart();
}

var totalPrice=0;
function showMyCart(){
	var diva=_("mainCart");
	_("mainCart").innerHTML="";

	var cov=document.createElement("div"); //for cover;
	cov.setAttribute("id","cover");
	_("likeBody").appendChild(cov);
	_("cover").style.display="block";
	_("mainCart").style.left="10%";

	var bbutton=document.createElement("div");
	bbutton.setAttribute("id","backTheCnfCart");
	bbutton.setAttribute("onclick","backMainCart()");
	bbutton.innerText="Go back";
	diva.appendChild(bbutton);
	if(myShopingCart.length!=0){
		var cCbutton=document.createElement("div");
		cCbutton.setAttribute("id","cnfCnfCart");
		cCbutton.innerText="Process for payment??";
		cCbutton.setAttribute("onclick","payment()");
		diva.appendChild(cCbutton);
	}else{
		var cCbutton=document.createElement("div");
		cCbutton.setAttribute("id","cnfCnfCart");
		cCbutton.innerText="Your Cart Is Empty!";
		diva.appendChild(cCbutton);
	}
	

	var table=document.createElement("div");
	table.setAttribute("id","selectedProductTable");
	diva.appendChild(table);
	var tr=document.createElement("div");
	tr.setAttribute("class","tableRow");
	if(myShopingCart.length!=0){
		var td=document.createElement("div");
		td.setAttribute("class","tableData");

		var td=document.createElement("div");
		td.setAttribute("class","tableDataRemove");
		td.innerText="#";
		tr.appendChild(td);

		var td=document.createElement("div");
		td.setAttribute("class","tableDataName");
		td.innerText="Name";
		tr.appendChild(td);

		var td=document.createElement("div");
		td.setAttribute("class","tableData");
		td.innerText="Rate";
		tr.appendChild(td);

		var td=document.createElement("div");
		td.setAttribute("class","tableData");
		td.innerText="Discount";
		tr.appendChild(td);

		var td=document.createElement("div");
		td.setAttribute("class","tableData");
		td.innerText="quantity";
		tr.appendChild(td);

		var td=document.createElement("div");
		td.setAttribute("class","tableData");
		td.innerText="Price";
		tr.appendChild(td);
	}
	totalPrice=0;
	for(var i=0; i<myShopingCart.length; i++){
		//console.log(myShopingCart[i]);
		var td=document.createElement("div");
		td.setAttribute("class","tableDataRemove");
		td.data=myShopingCart[i];
		td.setAttribute("onclick","removeThis(this.data)");
		td.innerText="x";
		tr.appendChild(td);
		

		var td=document.createElement("div");
		td.setAttribute("class","tableDataName");
		if(myShopingCart[i].name!=undefined){
			td.innerText=myShopingCart[i].name;
		}
		else{
			td.innerText="----";
		}
		tr.appendChild(td);

		var td=document.createElement("div");
		td.setAttribute("class","tableData");
		if(myShopingCart[i].price!=undefined){
			td.innerText=myShopingCart[i].price;
		}
		else{
			td.innerText="----";
		}
		tr.appendChild(td);

		var td=document.createElement("div");
		td.setAttribute("class","tableData");
		if(myShopingCart[i].discount!=undefined){
			td.innerText=myShopingCart[i].discount;
		}
		else{
			td.innerText="----";
		}
		tr.appendChild(td);

		var td=document.createElement("div");
		td.setAttribute("class","tableData");
		if(myShopingCart[i].quantity!=undefined){
			td.innerText=myShopingCart[i].quantity;
		}
		else{
			td.innerText="----";
		}
		tr.appendChild(td);

		var td=document.createElement("div");
		td.setAttribute("class","tableData");
		if(myShopingCart[i].price!=undefined){
			var myPrice=myShopingCart[i].price;
			var myQuantity=myShopingCart[i].quantity;
			if(myShopingCart[i].discount!=undefined){
				var myDiscount=myShopingCart[i].discount;
				td.innerText=Math.round((myPrice*myQuantity-(myPrice*myQuantity*(myDiscount.replace("%","")/100) ))*100)/100;
				totalPrice+=Math.round((myPrice*myQuantity-(myPrice*myQuantity*(myDiscount.replace("%","")/100) ))*100)/100;
			}
			else{
				td.innerText=myPrice*myQuantity;
				totalPrice+=myPrice*myQuantity
			}
			
		}
		else{
			td.innerText="----";
		}
		tr.appendChild(td);
		table.appendChild(tr);
	}
	var td=document.createElement("div");
	td.setAttribute("id","totalPrice");
	td.innerText="Total Price: "+totalPrice;
	tr.appendChild(td);
		table.appendChild(tr);
}

function backMainCart(){
	_("mainCart").style.left="-425%";
	_("cover").remove();
}

function removeThis(obj){
	var index=myShopingCart.indexOf(obj);
	myShopingCart.splice(index,1);
	_("cover").remove();
	showMyCart();
}
function payment(){
	console.log(totalPrice);
	_("paymentForm").style.display="block";
	_("cover").style.display="none";
	_("payBlock").style.display="none";
	_("paytm").value=totalPrice;

}
function backPay(){
	_("paymentForm").style.display="none";
	_("cover").style.display="block";
	_("payBlock").style.display="block";
}
document.getElementById("paymentForm").onsubmit=function(){thankyou(event)};
function thankyou(ev){
	ev.preventDefault();
	_("paymentForm").innerHTML="";
	_("paymentForm").innerHTML="<h1 id='thanks'>THANKS!!!!<br>-- Mr. "+name.toUpperCase()+"</h1>";
	_("paymentForm").innerHTML+="<input type='button' value='Close' id='close' onclick='window.location.reload()' >";
}