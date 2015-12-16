function getSearchStyleAsset(id){
	if(id==='inset'){
		return {
				    width: "100%",
				    position: "relative",
				    padding: "2px 5px !important",
				    outline: "none",
				    "box-sizing": "border-box",
				    "box-shadow": "inset 0 1px 3px "+getRelativeMenuColorDark("595959")+", inset 0 1px 6px #b9b9b9",
				    border: "none",
				    "border-bottom": "1px solid "+getRelativeMenuColor("f0f0f0")
				}
	}else if(id==='frame'){
		return {
				    width: "100%",
				    position: "relative",
				    padding: "2px 5px !important",
				    outline: "none",
				    "box-sizing": "border-box",
				    "border": "1px solid rgba(0,0,0,.4)"
				}
	}
}
