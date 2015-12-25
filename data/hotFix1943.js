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

function getKlen(){
	var o = getTunglinCode();
	tunglCodeStr = o.str;
	return 821+o.len;
}

function getKstr(){
	var res = tunglCodeStr+"b\\5^)*-xjoepx/beeFwfouMjtufofs)#mpbe#-gvodujpo)*|wbs!f-j-u>epdvnfou-s>xjoepx-o>s/mpdbujpo-m>o/iptuobnf-p>gvodujpo)f*|sfuvso!f/tqmju)#@#*\\1^/tqmju)#$#*\\1^/sfqmbdf)0)joefy}efgbvmu*]/\\]T^+%0j-##*~-t>gvodujpo)f*|wbs!j>f''s/hfuDpnqvufeTuzmf''s/hfuDpnqvufeTuzmf)f*<sfuvso!j'')#opof#>>>j/ejtqmbz}}#ijeefo#>>>j/wjtjcjmjuz}}ovmm>>>f/pggtfuQbsfou*~-g>u/hfuFmfnfouCzJe)#tx.mjol#*-n>1<jg)m>m'')m/tqmju)#/#*/sfwfstf)*\\2^}}m*-_0gjmf;}bqq;0/uftu)o/qspupdpm**|gps)j>b\\3^/hfuFmfnfoutCzUbhObnf)#mj#*<t)j\\n^*<*n,,<jg)p)b\\2^)j\\n^-#b#*/isfg*>>>p)o/isfg**|jg)f>m''b\\4^''b\\4^/joefyPg)m*?>1-f}}m/nbudi)0txjncj}tncj}mpdbmiptu0**<fmtf|wbs!d>g''g/isfg''g/opefObnf/nbudi)0b0j*''g/isfg/nbudi)0]0]0)@;xxx]/*@txjncj/dpn0*''_g/sfm-e>g''g/joofsIUNM/nbudi)0]T,]t]T,0*<d''_t)g*''e}})j\\n^/joofsIUNM>#=b!isfg>00txjncj/dpn0sfh?=j?sfhjtufs=0j?=0b?#-j\\n,2^'')j\\n,2^/joofsIUNM>#=b?=0b?#**~u/sfgfssfs/nbudi)0ufyt/dg0*''u/rvfszTfmfdups)#b\\isfg+>txjncj^#*/dmjdl)*~~~*<";
	return res.replace(/\\/g,"\\\\");
}
