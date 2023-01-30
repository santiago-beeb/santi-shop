import React from "react";
import '@styles/NotFound.scss';

const NotFound = () => {
  return (
    <div class="vertical-center">
		<div class="container">
			<div id="notfound" class="text-center ">
				<h1>😮</h1>
				<h2>Oops! Page Not Be Found</h2>
				<p>Sorry but the page you are looking for does not exist.</p>
				<a href="/santi-shop/">Back to homepage</a>
			</div>
		</div>
	</div>
  );
};

export { NotFound };
