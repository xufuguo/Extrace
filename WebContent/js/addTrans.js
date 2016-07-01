/*
 * liushuo
 */
        var map;
        var $j = jQuery.noConflict();
		map = new BMap.Map("container");
		var point = new BMap.Point(116.331398, 39.897445);
		map.centerAndZoom(point, 15);
		map.enableScrollWheelZoom(); //启用滚轮放大缩小，默认禁用
		map.enableContinuousZoom();
		var gc = new BMap.Geocoder();

		var geolocation = new BMap.Geolocation();
		geolocation.getCurrentPosition(function(r) {
			if (this.getStatus() == BMAP_STATUS_SUCCESS) {
				var mk = new BMap.Marker(r.point);
				map.addOverlay(mk);
				map.panTo(r.point);
				//alert('您的位置：'+r.point.lng+','+r.point.lat);

			} else {
				alert('failed' + this.getStatus());
			}
		}, {
			enableHighAccuracy : true
		});
		map.addEventListener("click", showInfo);
		function showInfo(e) {
			//alert(e.point.lng + ", " + e.point.lat);
			$j("#x").val(e.point.lng);
			$j("#y").val(e.point.lat);
			$j("#aaa").html(e.point.lng + ", " + e.point.lat);
			getLoac(e);
		}
		function getLoac(e) {
			gc.getLocation(new BMap.Point(e.point.lng, e.point.lat), function(
					rs) {
				var addComp = rs.addressComponents;
				/*alert(addComp.province + ", " + addComp.city + ", "
						+ addComp.district + ", " + addComp.street + ", "
						+ addComp.streetNumber);*/
				var province=$j("#s_province").textbox("getText");
				var city=$j("#s_city").textbox("getText");
				if (addComp.province==addComp.city) {
					city=addComp.province;
				}
				
				var county=$j("#s_county").textbox("getText");
				if (province!=addComp.province) {	
					$j.messager.alert("提示","省位置不符合,请重新选择！");
					//$j("#save").linkbutton("disable",true);
					return;
				}else if (city!=addComp.city) {
						$j.messager.alert("提示","市位置不符合,请重新选择！");
						//$j("#save").linkbutton("disable",true);
						return;
				}else if (county!=addComp.district) {
						$j.messager.alert("提示","县区位置不符合,请重新选择！");
						//$j("#save").linkbutton("disable",true);
						return;
				}

				$j("#address").textbox("setValue",
						addComp.province + ", " + addComp.city + ", "
								+ addComp.district + ", " + addComp.street
								+ ", " + addComp.streetNumber);
			});
		}

		