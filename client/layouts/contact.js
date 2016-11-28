Template.contact.events({
	'submit .feed': function(event){
		feedback.insert({
			name : $(fullname).val(),
			emailAddress : $(emailaddress).val(),
			Message : $(message).val()
		});
	}
})