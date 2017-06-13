var ruasDaCidade = [];

var AdicionarRua = function (i, j) {
    if (typeof (i) === "undefined" || typeof (j) === "undefined") {
        $.each(ruasDaCidade, function (iterador, elemento) {
            if ($(elemento).Superior() != null && $(elemento).Superior().is('.vazia')) {
                $(elemento).Superior().Rua();
                return;
            }

            if ($(elemento).Inferior() != null && $(elemento).Inferior().is('.vazia')) {
                $(elemento).Inferior().Rua();
                return;
            }

            if ($(elemento).Anterior() != null && $(elemento).Anterior().is('.vazia')) {
                $(elemento).Anterior().Rua();
                return;
            }

            if ($(elemento).Posterior() != null && $(elemento).Posterior().is('.vazia')) {
                $(elemento).Posterior().Rua();
                return;
            }
        });

        AtualizarRuasDaCidade();
    }

    else {
        var casa = ObterPorLinhaEColuna(i, j);
        casa.Rua();
        AtualizarRuasDaCidade();
    }
};

var AdicionarRuas = function () {
    while (CelulasVazias().length > 0) {
        AdicionarRua();
    };
};

var AdicionarCasa = function () {
    
};

var AtualizarRuasDaCidade = function () {
    ruasDaCidade = CelulasRuas();
}

var ResetarCidade = function () {
    $('.celula').Vazia();
    AdicionarRua(36, 0);
};

var CelulasVazias = function () {
    return ObterPorTipo('vazia');
};

var CelulasRuas = function () {
    return ObterPorTipo('rua');
};

var ObterPorLinhaEColuna = function (linha, coluna) {
    return $('div[data-linha="' + linha + '"]div[data-coluna="' + coluna + '"]');
};

var ObterPorTipo = function (tipo) {
    return $('.cidade .' + tipo);
};

$.fn.extend({
    Rua: function () {
        $(this).removeClass();
        $(this).addClass('celula rua');
    },

    Vazia: function () {
        $(this).removeClass();
        $(this).addClass('celula vazia');
    },

    Casa: function () {
        $(this).removeClass();
        $(this).addClass('celula casa');
    },

    Superior: function () {
        var linha = $(this).attr("data-linha");
        var coluna = $(this).attr("data-coluna");

        return ObterPorLinhaEColuna(parseInt(linha) - 1, coluna);
    },

    Inferior: function () {
        var linha = $(this).attr("data-linha");
        var coluna = $(this).attr("data-coluna");

        return ObterPorLinhaEColuna(parseInt(linha) + 1, coluna);
    },

    Anterior: function () {
        var linha = $(this).attr("data-linha");
        var coluna = $(this).attr("data-coluna");

        return ObterPorLinhaEColuna(linha, parseInt(coluna) - 1);
    },

    Posterior: function () {
        var linha = $(this).attr("data-linha");
        var coluna = $(this).attr("data-coluna");

        return ObterPorLinhaEColuna(linha, parseInt(coluna) + 1);
    },

    Vizinhas: function () {
        var vizinhas = [];

        vizinhas.push($(this).Superior());
        vizinhas.push($(this).Inferior());
        vizinhas.push($(this).Anterior());
        vizinhas.push($(this).Posterior());

        return vizinhas;
    },

    VizinhasQueSaoRuas: function () {
        var vizinhas = $(this).Vizinhas();
        var vizinhasQueSaoRuas = [];

        $.each(vizinhas, function (iterador, elemento) {
            if ($(elemento).is(".rua")) {
                vizinhasQueSaoRuas.push(elemento);
            }
        });

        return vizinhasQueSaoRuas;
    }
});

AdicionarRua(36, 0);
AtualizarRuasDaCidade();
//AdicionarRuas();