function allCheck(){
			with(document.frm) {
				if(all.checked) {
					for(var i=0;i<length;i++){
						if(elements[i].type == "checkbox"){
							elements[i].checked = true;
						}
					}
				}
				else {
					for(var i=0;i<length;i++){
						if(elements[i].type == "checkbox"){
							elements[i].checked = false;
						}
					}
				}
			}
		}