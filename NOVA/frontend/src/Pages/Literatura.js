import '../styles/components/pages/Index.css';
const Literatura = (props) => {
	return (

		<div id="myDIV">
			<div class="item1">
				<h3>
					RESEÑAS DE LIBROS
				</h3>

				{' '}
				<p>Haz clck aquí y tendrás acceso a una muy amplia lista de reseñas de distintos libros de fantasía, horror
					y ciencia ficción
				</p>
				<p></p>
				<div class="boton"><a href="https://www.itsup.edu.ec/library/index.php?page=12&id=3&db=0">Ver lista</a>
				</div>
			</div>

			<div class="item2">
				<h3>
					ESCRITORES
				</h3>

				{' '}
				<p>
					Aquí podrás acceder a una lista completa de los más importantes escritores del género.
				</p>
				<p class="autores">
					<a href="https://es.wikipedia.org/wiki/Julio_Verne">Julio Verne</a>
					<a href="https://es.wikipedia.org/wiki/H._G._Wells">{' '}H.G.WELS</a>{' '}
					<a href="https://es.wikipedia.org/wiki/Philip K. Dick">{' '}Philip K. Dick</a>{' '}
					<a href="https://es.wikipedia.org/wiki/H._P._Lovecraft">{' '}H. P. Lovecraft</a>{' '}
					<a href="https://es.wikipedia.org/wiki/Ray_Bradbury">{' '}Ray Bradbury</a>{' '}
					<a href="https://es.wikipedia.org/wiki/Ursula_K._Le_Guin">{' '}Ursula K Leguin</a>{' '}
					<a href="https://es.wikipedia.org/wiki/Arthur_C._Clarke">{' '}Arthur Clarke</a>{' '}
					<a href="https://es.wikipedia.org/wiki/Isaac_Asimov">{' '}Isaac Asimov</a>{' '}
					<a href="https://es.wikipedia.org/wiki/Frank_Herbert">{' '}Frank Herbert</a>{' '}
					<a href="https://es.wikipedia.org/wiki/Octavia_E._Butler">{' '}Octavia E. Butler</a>{' '}
					<a href="https://es.wikipedia.org/wiki/Stanis%C5%82aw_Lem">{' '}Stanislaw Lem</a>{' '}
					<a href="https://es.wikipedia.org/wiki/Ang%C3%A9lica_Gorodischer">{' '}Angélica Gorodischer</a>{' '}
					<a href="https://es.wikipedia.org/wiki/Adolfo_Bioy_Casares">{' '}Bioy Casares</a>{' '}
					<a href="https://es.wikipedia.org/wiki/Kurt_Vonnegut">{' '}Kurt Vonnegut</a>{' '}
					<a href="https://es.wikipedia.org/wiki/R._A._Lafferty">{' '}Lafferty</a>{' '}
					<a href="https://es.wikipedia.org/wiki/Samuel_R._Delany">{' '}Samuel R. Delany</a>{' '}
					<a href="https://es.wikipedia.org/wiki/Olaf_Stapledon">{' '}Olaf Stapledon</a>{' '}
					<a href="https://es.wikipedia.org/wiki/Pierre_Boulle">{' '}Pierre Boulle</a>{' '}

				</p>

			</div>

			<div class="item3">
				<h3>
					BIBLIOTECA
				</h3>

				{' '}
				<p>Haz clck en el siguiente enlace para acceder al catálogo de telegram donde podrás descargar gratuitamente
					todos los libros aquí mencionados
				</p>
				<p></p>
				{' '}
				{' '}
				<div class="boton"><a href="http://bibliotecasecreta.nl/">telegram</a>
				</div>
			</div>



		</div>

	);


}
export default Literatura;