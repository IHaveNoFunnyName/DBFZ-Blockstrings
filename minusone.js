var Minusone = {};
Minusone.dataparse = '';

$.getJSON("basicmoves.json", function(json) {
	Minusone.dataparse = json;
});

var s = new sigma({
	graph: { nodes: [], edges: [] },
	container: 'container',
	settings: {
		defaultNodeColor: '#ec5148'
	}
});

s.graph.addNode({
	id: "1",
	label: "wau",
	x: 0,
	y: 0,
	size: 10,
});

s.refresh();