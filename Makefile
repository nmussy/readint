build: components bin/readint.js
	@component build --dev

components: component.json
	@component install --dev

dist: components dist-build dist-minify

dist-build:
	@component build -s readint -o dist -n readint

dist-minify: dist/readint.js
	@curl -s \
		-d compilation_level=SIMPLE_OPTIMIZATIONS \
		-d output_format=text \
		-d output_info=compiled_code \
		--data-urlencode "js_code@$<" \
		http://closure-compiler.appspot.com/compile \
		> $<.tmp
	@mv $<.tmp dist/readint.min.js