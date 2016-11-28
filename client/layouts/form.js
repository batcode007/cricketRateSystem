Template.form.helpers({
  username:function() {
    if(Meteor.user())
    {
      return Meteor.user().profile.name;
    }
  }
});

Template.form.events({
 	'submit .appnitro': function(event){
 		var name = Meteor.user().profile.name;
		messages.insert({
			id : Meteor.userId(),
			name: name,
         	createdAt : new Date(),
           	ratings:{
           		val1 : $(element_1).val() || 0,
	           	val2 : $(element_2).val() || 0,
	           	val3 : $(element_3).val() || 0,
	          	val4 : $(element_4).val() || 0,
	   	        val5 : $(element_5).val() || 0,
		        val6 : $(element_6).val() || 0,
		        val7 : $(element_7).val() || 0,
		        val8 : $(element_8).val() || 0,
		        val9 : $(element_9).val() || 0,
		        val10 : $(element_10).val() || 0,
		        val11 : $(element_11).val() || 0,
		        val12 : $(element_12).val() || 0,
		        val13 : $(element_13).val() || 0,
		        val14 : $(element_14).val() || 0,
		        val15 : $(element_15).val() || 0,
		        val16 : $(element_16).val() || 0,
		        val17 : $(element_17).val() || 0,
		        val18 : $(element_18).val() || 0,
		        val19 : $(element_19).val() || 0,
		        val20 : $(element_20).val() || 0,
		        val21 : $(element_21).val() || 0,
		        val22 : $(element_22).val() || 0,
		        val23 : $(element_23).val() || 0,
		        val24 : $(element_24).val() || 0,
		        val25 : $(element_25).val() || 0,
		        val26 : $(element_26).val() || 0,
		        val27 : $(element_27).val() || 0,
		        val28 : $(element_28).val() || 0,
		        val29 : $(element_29).val() || 0,
		        val30 : $(element_30).val() || 0,
		        val31 : $(element_31).val() || 0,
		        val32 : $(element_32).val() || 0,
		        val33 : $(element_33).val() || 0,
		        val34 : $(element_34).val() || 0,
		        val35 : $(element_35).val() || 0,
		        val36 : $(element_36).val() || 0,
		        val37 : $(element_37).val() || 0,
		        val38 : $(element_38).val() || 0,
		        val39 : $(element_39).val() || 0,
		        val40 : $(element_40).val() || 0,
		        val41 : $(element_41).val() || 0,
		        val42 : $(element_42).val() || 0,
	    	}
        });
        document.getElementById("form_3917").reset();
        Router.go('recommendations');
		return false;
	}

});


