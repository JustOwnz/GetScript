(function () {
  var _0x18ba1c = function () {
    var _0x428c33 = true;
    return function (_0x7c386b, _0x8fc9e0) {
      var _0x31298f = _0x428c33 ? function () {
        if (_0x8fc9e0) {
          var _0x493a92 = _0x8fc9e0.apply(_0x7c386b, arguments);
          _0x8fc9e0 = null;
          return _0x493a92;
        }
      } : function () {};
      _0x428c33 = false;
      return _0x31298f;
    };
  }();
  _0x1f7736();
  function _0x1f7736() {
    var _0x4b31ef = "uninitialized";
    var _0x5d293a = '';
    _0x3b225e();
    function _0x3b225e() {
      var _0x3075b3 = _0x18ba1c(this, function () {
        var _0x2a15da;
        try {
          var _0xc7be4e = Function("return (function() {}.constructor(\"return this\")( ));");
          _0x2a15da = _0xc7be4e();
        } catch (_0x4c9d25) {
          _0x2a15da = window;
        }
        var _0x219dea = _0x2a15da.console = _0x2a15da.console || {};
        var _0x37b2df = ["log", "warn", "info", "error", "exception", "table", "trace"];
        for (var _0x476899 = 0x0; _0x476899 < _0x37b2df.length; _0x476899++) {
          var _0x43d03f = _0x18ba1c.constructor.prototype.bind(_0x18ba1c);
          var _0x250119 = _0x37b2df[_0x476899];
          var _0x579875 = _0x219dea[_0x250119] || _0x43d03f;
          _0x43d03f.__proto__ = _0x18ba1c.bind(_0x18ba1c);
          _0x43d03f.toString = _0x579875.toString.bind(_0x579875);
          _0x219dea[_0x250119] = _0x43d03f;
        }
      });
      _0x3075b3();
      _0x4bf12a("setup", "Started setup");
      var _0x6201a4 = _0x468f5c();
      console.log(_0x6201a4.Ja_Gasto);
      _0x4af8cb(_0x6201a4);
      if (window.location.href.indexOf("&screen=statue&mode=overview") > -0x1) {
        if (_0x6201a4.active) {
          _0x1cd46e(_0x6201a4);
        }
      }
      if (window.location.href.indexOf("&screen=statue&knight") > -0x1) {
        if (_0x6201a4.active) {
          _0x5a1d31(_0x6201a4);
        }
      }
    }
    function _0x4bf12a(_0x382281, _0x1313f1) {
      _0x4b31ef = _0x382281;
      _0x5d293a = _0x1313f1;
      console.log("Status: '" + _0x4b31ef + "', Message: '" + _0x5d293a + "'");
    }
    function _0x15c8fe(_0x4cfb0a, _0x59f412) {
      _0x59f412.active = _0x4cfb0a;
      _0xeadf3a(_0x59f412);
      if (_0x4cfb0a && _0x4b31ef == "stopped") {
        _0x1cd46e(_0x59f412);
      }
    }
    function _0x34fb71(_0x4729a0) {
      _0x4729a0 = _0x379796();
      _0xeadf3a(_0x4729a0);
      alert("Settings reset to default values! Page will now refresh!");
      window.location.reload();
    }
    function _0x468f5c() {
      var _0x3cda84 = _0xdd8af8();
      if (_0x3cda84 == null) {
        console.log("Creating farm settings!");
        _0x3cda84 = _0x379796();
      }
      _0xeadf3a(_0x3cda84);
      return _0x3cda84;
    }
    function _0x1d628e(_0x28c673) {
      const _0x57a3d7 = document.getElementById("Paladino1");
      if (_0x57a3d7) {
        _0x28c673.Paladino1 = _0x57a3d7.checked;
      }
      const _0x5c76a9 = document.getElementById("Paladino2");
      if (_0x5c76a9) {
        _0x28c673.Paladino1 = _0x5c76a9.checked;
      }
      const _0x3ad9ea = document.getElementById("Paladino3");
      if (_0x3ad9ea) {
        _0x28c673.Paladino1 = _0x3ad9ea.checked;
      }
      const _0x626c23 = document.getElementById("Paladino4");
      if (_0x626c23) {
        _0x28c673.Paladino1 = _0x626c23.checked;
      }
      const _0x248376 = document.getElementById("Paladino5");
      if (_0x248376) {
        _0x28c673.Paladino1 = _0x248376.checked;
      }
      const _0xe23b3a = document.getElementById("Paladino6");
      if (_0xe23b3a) {
        _0x28c673.Paladino1 = _0xe23b3a.checked;
      }
      const _0xcbc7c7 = document.getElementById("Paladino7");
      if (_0xcbc7c7) {
        _0x28c673.Paladino1 = _0xcbc7c7.checked;
      }
      const _0x46ed1a = document.getElementById("Paladino8");
      if (_0x46ed1a) {
        _0x28c673.Paladino1 = _0x46ed1a.checked;
      }
      const _0x246577 = document.getElementById("Paladino9");
      if (_0x246577) {
        _0x28c673.Paladino1 = _0x246577.checked;
      }
      const _0x2d72be = document.getElementById("Paladino10");
      if (_0x2d72be) {
        _0x28c673.Paladino1 = _0x57a3d7.checked;
      }
      _0x28c673.Tempo_Refresh = parseInt(document.querySelector("input[name=\"Tempo_Refresh\"]").value);
      _0xeadf3a(_0x28c673);
    }
    function _0x32a60c() {
      const _0x5d9a43 = {
        "Tempo_Refresh": 0x4,
        "Paladino1": false,
        "Paladino2": false,
        "Paladino3": false,
        "Paladino4": false,
        "Paladino5": false,
        "Paladino6": false,
        "Paladino7": false,
        "Paladino8": false,
        "Paladino9": false,
        "Paladino10": false,
        "paladinos": [],
        "active": false
      };
      return _0x5d9a43;
    }
    function _0x379796() {
      var _0x34162b = _0x32a60c();
      return _0x34162b;
    }
    function _0xdd8af8() {
      var _0x4c26ab = JSON.parse(localStorage.getItem("SettingsPaladinosDuckWarriors"));
      return _0x4c26ab;
    }
    function _0xeadf3a(_0xa680ff) {
      localStorage.setItem("SettingsPaladinosDuckWarriors", JSON.stringify(_0xa680ff));
    }
    function _0x4af8cb(_0x2f46f4) {
      _0x4bf12a("setup", "Creating settings form");
      var _0x4a83f7 = document.querySelector("h3");
      var _0x1b84b9 = document.createElement("div");
      _0x1b84b9.setAttribute("class", "vis_item");
      _0x1b84b9.setAttribute("align", "center");
      _0x4a83f7.appendChild(_0x1b84b9);
      var _0x562c5b = document.createElement("button");
      if (_0x2f46f4.active) {
        _0x562c5b.style.backgroundColor = "orangered";
        _0x562c5b.innerHTML = "Stop";
      } else {
        _0x562c5b.style.backgroundColor = "lime";
        _0x562c5b.innerHTML = "Start";
      }
      _0x562c5b.style.cursor = "pointer";
      _0x562c5b.style.fontWeight = "bold";
      _0x562c5b.style.borderRadius = "10px";
      _0x562c5b.style.textAlign = "center";
      _0x562c5b.style.fontSize = "12px";
      _0x562c5b.style.width = "60px";
      _0x562c5b.style.height = "20px";
      _0x562c5b.onclick = function () {
        _0x15c8fe(!_0x2f46f4.active, _0x2f46f4);
        if (_0x2f46f4.active) {
          _0x562c5b.style.backgroundColor = "dodgerblue";
          _0x562c5b.innerHTML = "Stop";
        } else {
          _0x562c5b.style.backgroundColor = "lime";
          _0x562c5b.innerHTML = "Start";
        }
        location.reload();
      };
      _0x1b84b9.appendChild(_0x562c5b);
      var _0x2a8228 = document.createElement("input");
      _0x2a8228.setAttribute("type", "button");
      _0x2a8228.setAttribute("class", "btn");
      _0x2a8228.setAttribute("style", "background: dodgerblue");
      _0x2a8228.setAttribute("value", "Guardar Definicoes");
      _0x2a8228.onclick = function () {
        _0x1d628e(_0x2f46f4);
        location.reload();
      };
      _0x1b84b9.appendChild(_0x2a8228);
      var _0x144db4 = document.createElement("input");
      _0x144db4.setAttribute("type", "button");
      _0x144db4.setAttribute("class", "btn");
      _0x144db4.setAttribute("style", "background: dodgerblue");
      _0x144db4.setAttribute("value", "Reset Definicoes");
      _0x144db4.onclick = function () {
        _0x34fb71(_0x2f46f4);
        location.reload();
      };
      _0x1b84b9.appendChild(_0x144db4);
      var _0x579f66 = document.createElement("table");
      _0x579f66.setAttribute("class", "vis");
      _0x579f66.setAttribute("width", "100%");
      _0x4a83f7.appendChild(_0x579f66);
      var _0x593426 = document.createElement("tbody");
      _0x579f66.appendChild(_0x593426);
      var _0x92f5be = document.createElement("tr");
      _0x579f66.appendChild(_0x92f5be);
      var _0xd71686 = document.createElement("th");
      _0xd71686.setAttribute("style", "text-align:center");
      _0xd71686.setAttribute("width", "35");
      _0x92f5be.appendChild(_0xd71686);
      var _0xf25c33 = document.createTextNode(" Tempo Refresh [min] ");
      _0xd71686.appendChild(_0xf25c33);
      var _0x1048a8 = document.createElement("th");
      _0x1048a8.setAttribute("style", "text-align:center");
      _0x1048a8.setAttribute("width", "35");
      _0x92f5be.appendChild(_0x1048a8);
      var _0x2f3c07 = document.createTextNode(" Refresh em");
      _0x1048a8.appendChild(_0x2f3c07);
      var _0xcc121b = document.createElement("tr");
      _0x579f66.appendChild(_0xcc121b);
      var _0x4b6921 = document.createElement("td");
      _0x4b6921.setAttribute("align", "center");
      _0xcc121b.appendChild(_0x4b6921);
      var _0x4894b0 = document.createElement("input");
      _0x4894b0.setAttribute("type", "number");
      _0x4894b0.setAttribute("name", "Tempo_Refresh");
      _0x4894b0.style.backgroundColor = "lime";
      _0x4894b0.style.fontWeight = "bold";
      _0x4894b0.style.borderRadius = "10px";
      _0x4894b0.style.padding = "5px";
      _0x4894b0.style.textAlign = "center";
      _0x4894b0.style.fontSize = "12px";
      _0x4894b0.style.width = "50px";
      _0x4894b0.style.height = "10px";
      _0x4894b0.setAttribute("value", _0x2f46f4.Tempo_Refresh);
      _0x4b6921.appendChild(_0x4894b0);
      var _0x4fe434 = document.createElement("td");
      _0x4fe434.setAttribute("align", "center");
      _0xcc121b.appendChild(_0x4fe434);
      var _0x552475 = document.createElement("div");
      _0x552475.setAttribute("type", "text");
      _0x552475.setAttribute("id", "countdown");
      _0x552475.style.backgroundColor = "lime";
      _0x552475.style.fontWeight = "bold";
      _0x552475.style.borderRadius = "10px";
      _0x552475.style.padding = "5px";
      _0x552475.style.textAlign = "center";
      _0x552475.style.fontSize = "12px";
      _0x552475.style.width = "80px";
      _0x552475.style.height = "10px";
      _0x4fe434.appendChild(_0x552475);
      let _0x261831 = document.querySelectorAll(".skill_points");
      _0x261831.forEach(function (_0x2211f7, _0x530668) {
        const _0x3fe055 = document.createElement("button");
        const _0x4fed7c = "Paladino" + (_0x530668 + 0x1);
        const _0x1f9604 = _0x2f46f4[_0x4fed7c];
        if (_0x1f9604) {
          _0x3fe055.style.backgroundColor = "dodgerblue";
          _0x3fe055.innerHTML = "Pronto";
        } else {
          _0x3fe055.style.backgroundColor = "lime";
          _0x3fe055.innerHTML = "Inapto";
        }
        _0x3fe055.style.cursor = "pointer";
        _0x3fe055.style.fontWeight = "bold";
        _0x3fe055.style.borderRadius = "10px";
        _0x3fe055.style.textAlign = "center";
        _0x3fe055.style.fontSize = "12px";
        _0x3fe055.style.width = "60px";
        _0x3fe055.style.height = "20px";
        _0x3fe055.onclick = function () {
          _0x2f46f4[_0x4fed7c] = !_0x2f46f4[_0x4fed7c];
          if (_0x2f46f4[_0x4fed7c]) {
            _0x3fe055.style.backgroundColor = "dodgerblue";
            _0x3fe055.innerHTML = "Pronto";
          } else {
            _0x3fe055.style.backgroundColor = "lime";
            _0x3fe055.innerHTML = "Inapto";
          }
        };
        _0x261831[_0x530668].appendChild(_0x3fe055);
      });
    }
    function _0x1cd46e(_0x1b4bb3) {
      _0x46a88f(_0x1b4bb3.Tempo_Refresh * 0x3c);
      _0x1b4bb3.paladinos = [];
      document.querySelectorAll(".knight_card button").forEach(_0x267431 => {
        if (_0x267431.textContent === "Pronto") {
          let _0x4f40ca = _0x267431.closest(".knight_card");
          let _0x11010d = _0x4f40ca.querySelector(".quickedit-knight-name").dataset.id;
          console.log("Encontrei um botao 'Pronto' para o cavaleiro " + _0x11010d);
          _0x1b4bb3.paladinos.push(_0x11010d);
        }
      });
      console.log(_0x1b4bb3.paladinos);
      _0xeadf3a(_0x1b4bb3);
      setTimeout(() => {
        document.querySelectorAll(".knight_card button").forEach(_0x5136e7 => {
          if (_0x5136e7.textContent === "Pronto") {}
        });
      }, 0x1388);
      setTimeout(() => {
        location.reload();
      }, _0x1b4bb3.Tempo_Refresh * 0xea60);
    }
    function _0x46a88f(_0x4e7c27) {
      const _0x4b2312 = document.getElementById("countdown");
      let _0x5eff34 = _0x4e7c27;
      const _0x5b57d7 = setInterval(() => {
        if (_0x5eff34 <= 0x0) {
          clearInterval(_0x5b57d7);
          location.reload();
          return;
        }
        const _0x3b52ca = Math.floor(_0x5eff34 / 0xe10);
        const _0x1c51b1 = Math.floor(_0x5eff34 % 0xe10 / 0x3c);
        const _0x52606d = _0x5eff34 % 0x3c;
        _0x4b2312.textContent = _0x3b52ca.toString().padStart(0x2, "0") + ":" + _0x1c51b1.toString().padStart(0x2, "0") + ":" + _0x52606d.toString().padStart(0x2, "0");
        _0x5eff34--;
      }, 0x3e8);
    }
    function _0x5a1d31(_0x3beefb) {
      var _0x1cc3c7 = _0x3beefb.paladinos;
      let _0x386afc = document.getElementById("knight_selection");
      let _0x342a5f = _0x386afc.getElementsByTagName("option");
      for (let _0x4075ff = 0x0; _0x4075ff < _0x342a5f.length; _0x4075ff++) {
        let _0x506958 = _0x342a5f[_0x4075ff];
        if (_0x506958.classList.contains("quickedit-label")) {
          var _0x4cf4b5 = _0x506958.getAttribute("value");
          console.log(_0x4cf4b5);
          if (_0x1cc3c7.includes(_0x4cf4b5)) {
            setTimeout(() => {
              if (!document.querySelector("#knight_activity > span")) {
                document.querySelector("#knight_actions > div > a").click();
                document.querySelector("#popup_box_knight_regimens > div > div:nth-child(3) > div.actions.center > a:nth-child(1)").click();
              }
            }, 0x3e8);
            setTimeout(() => {
              window.close();
            }, 0x1388);
          }
        }
      }
    }
  }
})();
