<h1>Reglas a seguir</h1>

<h2>General</h2>
<ul>
  <li>Todo debe estar en inglés.</li>
  <li>Async, await</li>
  <li>Terminar cada línea en punto y coma.</li>
  <li>Indicar el autor, entre paréntesis, cuando se deja un comentario.</li>
  <li>Configurar su editor de texto la identación a 2 espacios.</li>
  <li>Los commits también deben estar en inglés y deben ser lo más explícito posible.</li>
  <li>Comunicar cada vez que se hace un commit, push, un pull request o un merge (obligatorio).</li>
</ul>

```js
const getName = async () => {
  const name = await getUserService().name; // this is a user name (Jose Ñ)
  return name;
}
```

<h3>Variables</h3>
<ul>
  <li>camelCase.</li>
  <li>Lo más explícito posible.</li>
  <li>Si se usa números, que sea en texto.</li>
  <li>Las variables en entidades deben ser UpperCamelCase.</li>
</ul>

<h3>Funciones y métodos</h3>
<ul>
  <li>camelCase.</li>
  <li>Arrow functions.</li>
  <li>Lo más explícito posible.</li>
  <li>Si se usa números, que sea en texto.</li>
</ul>

<h3>Clases y componentes</h3>
<ul>
  <li>UpperCamelCase.</li>
</ul>

<h3>Archivos</h3>
<ul>
  <li>kebab-case.</li>
</ul>

<h3>Paquetes y carpetas</h3>
<ul>
  <li>lowercase.</li>
</ul>
