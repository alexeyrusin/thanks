app = Flask(__name__)

@app.route('/')
def hello_world():
    return render_template('index.html')

@app.route('/sitemap.xml')
def sitemap():
    try:
        sitemap_xml = render_template('sitemap.xml')
        response= make_response(sitemap_xml)
        response.headers["Content-Type"] = "application/xml"
        return response
    except Exception as e:
        return(str(e))

@app.route('/robots.txt')
def robots():
    try:
        sitemap_xml = render_template('robots.txt')
        response= make_response(sitemap_xml)
        response.headers["Content-Type"] = "application/txt"
        return response
    except Exception as e:
        return(str(e))