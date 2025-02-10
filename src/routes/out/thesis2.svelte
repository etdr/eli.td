
<h1>out<span class="non-b">/thesis</span></h1>

<p>My master’s thesis was written in 2015 and 2016, and was successfully defended on July 4th of 2016. It outlines the idea of a syntactically extensible language and a possible parsing algorithm for tokenization and parsing using tree transducers.</p>
<p>Here’s the abstract:</p>
<blockquote>
<p><em>While extending the semantics of programming languages is commonplace, extending their syntax is usually not possible. In this thesis, we are concerned with the problem of parsing programming languages that are simultaneously syntactically extensible and human-readable. The quintessential extensible programming language, Lisp, can be extended by two separate macro systems that allow user-defined syntactic features to be integrated naturally and directly into the parser. However, the default syntax of Lisp is notoriously unreadable. Other languages, such as Python, are highly readable, but are designed and parsed in ways that leave the syntax essentially frozen from the user’s perspective.</em></p>
</blockquote>
<blockquote>
<p><em>We will propose a new parsing method, called Readtable-Macro TransducerChain parsing, that is inspired by Lisp’s reader algorithm. This algorithm is naively extended to add support for readable syntactic structures (such as infix notation), while retaining the spirit of simplicity and modularity that is its characteristic.</em></p>
</blockquote>
<blockquote>
<p><em>As a proof-of-concept, we implement a compiler for a new programming language called Anoky — essentially an alternative syntax for Python.</em></p>
</blockquote>
<p>Feel free to download it <a href="/texts/rmtc.pdf">here</a>.</p>