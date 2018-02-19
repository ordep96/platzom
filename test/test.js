
const expect = require('chai').expect
// con el punto le estamos asignando la ruta de nuestra libreria que obtiene
// en el package.json en la ruta main(principal)
const platzom = require('..').default


// funciona por moca
describe('#platzom', function(){

	it('si la palabra termina con "ar", se le quitan esas dos letras', function(){
		const translation = platzom('Programar')
		expect(translation).to.equal("Program")
	})
	it('si la palabra inicia con Z, se le añade pe al final', function(){
			const translation = platzom("Zorro")
			const translation2 = platzom("Zarpar")
			expect(translation).to.equal("Zorrope")
			expect(translation2).to.equal("Zarppe")

	})
	it('Si la palabra traducida tiene 10 o más letras, se debe partir por la mitad y unir con un guión medio', function(){
			const translation = platzom("abecedario")
			expect(translation).to.equal("abece-dario")

	})
	it('Por último, si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra pero intercalando letras mayúsculas y minúsculas', function(){
			const translation = platzom("sometemos")
			expect(translation).to.equal("SoMeTeMoS")
	})

});