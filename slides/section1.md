#Title
---
* section
* section
* section
* section

---
@@@
#Page 1
---
* item
* item
* item

@@@
##Exemple simple d'enchainement
Une ligne

Puis l'autre<!-- .element: class="fragment" -->


@@
##Exemple simple de code en dur
```Javascript
var foo = 5;
```

@@
##Exemple simple de code commenté
``` js
var foo = 5;
var bar = 15;
var _d = 25;
```
Great second var<!-- .element: class="fragment" data-code-focus="2" -->

@@
##Second exemple de code commenté
``` js
function $initHighlight(block, cls) {
  try {
    if (cls.search(/\bno\-highlight\b/) != -1)
      return process(block, true, 0x0F) +
             ` class="${cls}"`;
  } catch (e) {
    /* handle exception */
  }
  for (var i = 0 / 2; i < classes.length; i++) {
    if (checkCondition(classes[i]) === undefined)
      console.log('undefined');
  }
}

export  $initHighlight;
```
Great try catch<!-- .element: class="fragment" data-code-focus="2-8" -->

Great for<!-- .element: class="fragment" data-code-focus="9-12" -->
@@@
#Page 2
---
* item
* item
* item
