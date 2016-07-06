'use strict';

angular.module('stApp').directive('ngMobileClick', function($timeout, $interval) {
						return {
								restrict: 'A',
								link: function(scope, elem) {
									var timer,
											interval;
										elem.bind('touchstart', function(e) {
												var targetBtn = e.target;
												timer = $timeout(function() {}, 1000);
												e.target.classList.contains('js-add-point') ?
														function() {
																timer.then(function() {
																		interval = $interval(function() {
																				modifyPoints(targetBtn, 10,'add');
																		}, 500);
																}, function() {
																		modifyPoints(targetBtn, 1,'add');
																});
														}() :
														function() {
																timer.then(function() {
																		interval = $interval(function() {
																				modifyPoints(targetBtn, 10,'subtract');
																		}, 500);
																}, function() {
																		modifyPoints(targetBtn, 1,'subtract');
																});
														}();
										});

											elem.bind('touchend', function(e) {
													var targetBtn = e.target;
													$timeout.cancel(timer);
													$interval.cancel(interval);
											});

											var modifyPoints = function(targetBtn, valueAdded,modifier) {
												console.log(modifier);
													var target = targetBtn.parentNode.querySelector('.si__points');
													var value = parseInt(target.textContent);
													modifier === 'add' ?  value += valueAdded : value -= valueAdded
													target.textContent = value;
											};
								}
						};
});
