
		var path = new Path();
		path.style = {
			// strokeColor: '#E4141B',
			// strokeWidth: 20,
			// strokeCap: 'round'
		};
		var size = 7;
		var segments = path.segments;
		var start = view.center / [10, 1];
			path.add(start + new Point(0, 0));
			path.add(start + new Point(100, 0));
			path.add(start + new Point(180, 0));
			path.add(start + new Point(240, 0));
			path.add(start + new Point(280, 0));
			path.add(start + new Point(300, 0));
			path.add(start + new Point(300, 0));

		function onMouseMove(event) {
				segments[0].point = event.point;
					// jQuery('.sundries_tile_1').css({left : path.segments[0].point._x})
					// jQuery('.sundries_tile_1').css({top : path.segments[0].point._y})
					// jQuery('.sundries_tile_2').css({left : path.segments[1].point._x})
					// jQuery('.sundries_tile_2').css({top : path.segments[1].point._y})
					// jQuery('.sundries_tile_3').css({left : path.segments[2].point._x})
					// jQuery('.sundries_tile_3').css({top : path.segments[2].point._y})
					// jQuery('.sundries_tile_4').css({left : path.segments[3].point._x})
					// jQuery('.sundries_tile_4').css({top : path.segments[3].point._y})
				for (var i = 0; i < size - 1; i++) {
					var nextSegment = segments[i + 1];
					var position = path.segments[i].point;
					var angle = (position - nextSegment.point).angle;
					var vector = new Point({ angle: angle, length: 35 });
					nextSegment.point = position - vector;
				}
		}

		function onMouseDown(event) {
			path.fullySelected = true;
			path.strokeColor = '#e08285';
		}

		function onMouseUp(event) {
			path.fullySelected = false;
			path.strokeColor = '#e4141b';
		}
