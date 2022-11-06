import bottle
import json

@bottle.route("/")
def serve_html():
  return bottle.static_file("start.html", root=".")

@bottle.route("/start.txt")
def serve_startTxt():
  return bottle.static_file("start.txt", root=".")

@bottle.route("/gamepage.txt")
def serve_game():
  return bottle.static_file("gamepage.txt", root=".")

@bottle.route("/start.js")
def serve_js():
  return bottle.static_file("start.js", root=".")
  
@bottle.route("/gamepage.css")
def serve_gameplaycss():
  return bottle.static_file("gamepage.css", root=".")
  
@bottle.route("/web.js")
def webJS():
  return bottle.static_file("web.js", root=".")

@bottle.route("/style.css")
def serve_cssFile():
  return bottle.static_file("style.css", root=".")

@bottle.route("/ajax.js")
def serve_ajaxFile():
  return bottle.static_file("ajax.js", root=".")

#put all sprites after this comment

@bottle.route("/goose_medium.png")
def OJ_Simpson():
  return bottle.static_file("goose_medium.png", root=".")

@bottle.route("/goose_high.png")
def goose_high():
  return bottle.static_file("goose_high.png", root=".")

@bottle.route("/goose_low.png")
def goose_low():
  return bottle.static_file("goose_low.png", root=".")
  
@bottle.route("/goose_poof.png")
def goose_poof():
  return bottle.static_file("goose_poof.png", root=".")

@bottle.route("/Grass1.png")
def serve_grass():
  return bottle.static_file("Grass1.png", root=".")

@bottle.route("/honk-sound.mp3")
def honk_sound():
  return bottle.static_file("honk-sound.mp3", root=".")

@bottle.route("/egg.png")
def serve_Egg():
  return bottle.static_file("egg.png", root=".")

  
bottle.run(host='0.0.0.0',port=8080)