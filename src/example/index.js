/////////////////
/// COMPONENTS //
/////////////////

// Container
var App = React.createClass({
	apiKey: '87dfa1c669eea853da609d4968d294be',
	getInitialState: function() {
		return {data: []};
	},
	performSearch: function(e) {
		// stop form from submitting
		e.preventDefault();
		
		// get the value
		var val = $('.Search input').val();
		
		// Do the thing
		var requestUrl = 'https://api.themoviedb.org/3/search/multi?query=' + val + '&api_key=' + this.apiKey;
		
		$.ajax({
      url: requestUrl,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
		
	},
	componentDidUpdate: function() {
	
	},
	render: function() {
		
		if(this.state.data.results) {
			console.log(this.state.data);
		}
		
		return (
			<div>
				<Header onSubmit={this.performSearch} />
				<Hero />
				<TitleList title="Top TV picks for Jack" url='discover/tv?sort_by=popularity.desc&page=1' />
				<TitleList title="Trending now" url='discover/movie?sort_by=popularity.desc&page=1' />
				<TitleList title="Most watched in Horror" url='genre/27/movies?sort_by=popularity.desc&page=1' />
				<TitleList title="Sci-Fi greats" url='genre/878/movies?sort_by=popularity.desc&page=1' />
				<TitleList title="Comedy magic" url='genre/35/movies?sort_by=popularity.desc&page=1' />
			</div>
		);
	}
});

////////////
// Header //
////////////

var Header = React.createClass({
	render: function() {
		return (
			<header className="Header">
				<Logo />
				<Navigation />
				<Search onSubmit={this.props.onSubmit} />
				<UserProfile />
			</header>
		);
	}
});


// Navigation
var Navigation = React.createClass({
	render: function() {
		return (
			<div id="navigation" className="Navigation">
				<nav>
					<ul>
						<li>Browse</li>
						<li>My list</li>
						<li>Top picks</li>
						<li>Recent</li>
					</ul>
				</nav>
			</div>
		);
	}
});

// Search
var Search = React.createClass({
	render: function() {
		return (
			<form onSubmit={this.props.onSubmit} id="search" className="Search">
				<input type="search" placeholder="Search for a title..." />
			</form>
		);
	}
});

// User Profile
var UserProfile = React.createClass({
	render: function() {
		return (
			<div className="UserProfile">
				<div className="User">
					<div className="name">Jack Oliver</div>
					<div className="image"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/profile/profile-512_1.jpg" /></div>
				</div>
				<div className="UserProfile-menu">
					<div className="UserProfileSwitch">
						<ul>
							<li>
								<div className="UserProfile-image">
									<img src="http://lorempixel.com/96/96" />
								</div>
								<div className="UserProfile-name">
									Alexander
								</div>
							</li>
							<li>
								<div className="UserProfile-image">
									<img src="http://lorempixel.com/96/96" />
								</div>
								<div className="UserProfile-name">
									Mattias
								</div>
							</li>
						</ul>
					</div>
					<div className="UserNavigation">
						<ul>
							<li>Your Account</li>
							<li>Help Center</li>
							<li>Sign out of Netflix</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
});

//////////
// Hero //
//////////

var Hero = React.createClass({
	render: function() {
		return (
			<div id="hero" className="Hero" style={{backgroundImage: 'url(https://images.alphacoders.com/633/633643.jpg)'}}>
				<div className="content">
					<img className="logo" src="http://www.returndates.com/backgrounds/narcos.logo.png" alt="" />
					<h2>Season 2 now available</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque id quam sapiente unde voluptatum alias vero debitis, magnam quis quod.</p>
					<div className="button-wrapper">
						<HeroButton primary={true} text="Watch now" />
						<HeroButton primary={false} text="+ My list" />
					</div>
				</div>
				<div className="overlay"></div>
			</div>
		);
	}
})

// Hero Button
var HeroButton = React.createClass({
	render: function() {
		return (
			<a href="#" className="Button" data-primary={this.props.primary}>{this.props.text}</a>
		);
	}
})

////////////////
// Title List //
////////////////

// Title List Container

var TitleList = React.createClass({
	apiKey: '87dfa1c669eea853da609d4968d294be',
	getInitialState: function() {
		return {data: [], mounted: false};
	},
	loadContent: function() {
		var requestUrl = 'https://api.themoviedb.org/3/' + this.props.url + '&api_key=' + this.apiKey;
		
		$.ajax({
      url: requestUrl,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
				// console.log(data);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
	},
	componentDidMount: function() {
		this.loadContent();
		this.setState({ mounted: true });
	},
	componentWillUnmount: function() {
		this.setState({ mounted: false });
	},
	render: function() {
		if(this.state.data.results) {
			var titles = this.state.data.results.map(function(title, i) {
				if(i < 5) {

					var backDrop = 'http://image.tmdb.org/t/p/original' + title.backdrop_path;
					if(!title.name) {
						var name = title.original_title;
					} else {
						var name = title.name;
					}

					return (
						<Item key={title.id} title={name} score={title.vote_average} overview={title.overview} backdrop={backDrop} />
					);	

				}
			});	

		} else {
			var titles = '';
		}
		
		return (
			<div ref="titlecategory" className="TitleList" data-loaded={this.state.mounted}>
				<div className="Title">
					<h1>{this.props.title}</h1>
					<div className="titles-wrapper">
						{titles}
					</div>
				</div>
			</div>
		);
	}
});



// ListToggle
var ListToggle = React.createClass({
	getInitialState: function() {
		return({ toggled: false })
	},
	handleClick: function() {
		if(this.state.toggled === true) {
			this.setState({ toggled: false });
		} else {
			this.setState({ toggled: true });	
		}
		
	},
	render: function() {
		return (
			<div onClick={this.handleClick} data-toggled={this.state.toggled} className="ListToggle">
				<div>
					<i className="fa fa-fw fa-plus"></i>
					<i className="fa fa-fw fa-check"></i>
				</div>
			</div>
		);
	}
});



ReactDOM.render(
	<App />,
	document.getElementById('app')
);