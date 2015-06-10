$(document).on('ready', function() {

//Profile

	var profileTempFunction = Handlebars.compile( $("#profileTemplate").html() )

	$.ajax({
	  url: "https://api.github.com/users/ghaea",
	  method: "GET",
	  data: {
	    access_token: "3b2e77f921315bbd9d39a0ec8267ff75107c7aff"
	  },
	  success: function(data) {

	  	data.created_at = moment(data.created_at).format("MMM Do YY")

	  	$(".profile").append(profileTempFunction(data))
	  }
	})

//Repository

	var repoTempFunction = Handlebars.compile( $("#ghRepoTemplate").html() )

	$.ajax({
	  url: "https://api.github.com/users/ghaea/repos",
	  method: "GET",
	  data: {
	    access_token: "3b2e77f921315bbd9d39a0ec8267ff75107c7aff"
	  },
	  success: function(data) { 

	  	_.each(data, function(repo) {

	  		repo.updated_at = moment(repo.updated_at, "YYYYMMDD").fromNow()
	  		
	  		var htmlString = repoTempFunction(repo)
	  		
	  		$(".gh-pages").append(htmlString)
	  	})

	  	
	  }
	})


})