var vm = new Vue({
	el: "#shopping-cart",
	data: {
		productList: [
			// {
			// 	pro_name: "【斯文】甘油 | 丙三醇",
			// 	pro_brand: "skc",
			// 	pro_place: "韩国",
			// 	pro_purity: "99.7%",
			// 	pro_min: "215千克",
			// 	pro_depot: "上海仓海仓储",
			// 	pro_num: 3,
			// 	pro_img: "http://wx2.sinaimg.cn/mw690/edda54c6gy1fjqqp612w5j20si0nsx40.jpg",
			// 	pro_price: 400,
			// },
			// {
			// 	pro_name: "【瑞文】甘油 | 复合高级丙三醇",
			// 	pro_brand: "skc",
			// 	pro_place: "Korea",
			// 	pro_purity: "100%",
			// 	pro_min: "1000千克",
			// 	pro_depot: "上海仓海仓储",
			// 	pro_num: 3,
			// 	pro_img: "http://wx2.sinaimg.cn/mw690/edda54c6gy1fjqqp612w5j20si0nsx40.jpg",
			// 	pro_price: 600,
			// },
			// {
			// 	pro_name: "【金克拉】 | 复合高级复合肥",
			// 	pro_brand: "skc",
			// 	pro_place: "南非",
			// 	pro_purity: "100%",
			// 	pro_min: "100千克",
			// 	pro_depot: "上海苏州河",
			// 	pro_num: 2,
			// 	pro_img: "http://wx2.sinaimg.cn/mw690/edda54c6gy1fjqqp612w5j20si0nsx40.jpg",
			// 	pro_price: 680,	
			// }
		]
	},
	computed: {
		allSelected: {
			get: function() {
				for (var i in this.productList) {
					if (this.productList[i].picked === false) {
						return false;
					}
				}
				return true;
			},
			set: function(val) {
				for (var i in this.productList) {
					this.productList[i].picked = val;
				}
			}
		},
	
		getTotal: function() {
		
			var _proList = this.productList.filter(function(val) {
				return val.select;
			}),
				totalPrice = 0,
				totalNum = 0;
			for (var i in _proList) {
				//总价累加 数目累加
				totalPrice += _proList[i].pro_num * _proList[i].pro_price;
				totalNum += _proList[i].pro_num;
			}
			// return {totalNum:_proList.length,totalPrice:totalPrice}
			return { totalNum: totalNum, totalPrice: totalPrice };
		}
	},
	methods: {
			isSelectAll: function() {
			return this.productList.map(val => {
				val.select = !val.select;
			});
		},
		// selectProduct: function(index) {
		// 	// for (var i in this.productList) {
		// 	// 	this.productList[i] = _isSelect;
		// 	// }
		// 	console.log(  this.productList[index].select )
		// 	// this.productList[index].select =!this.productList[index].select
		// },
		
		deleteProduct: function() {
			this.productList=this.productList.filter(function (item) {return !item.select})
			// this.productList.select=!this.productList.select
		},
	
		deleteOneProduct: function(index) {
			
			this.productList.splice(index, 1);
		}
	},
	mounted: function() {
		var self = this;
		self.productList.map(item => {
			self.$set(item, "select", false); 
			self.$set(item, "picked", false);
		});
	}
});