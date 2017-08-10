import os
import datetime
from lib.common.nameConfig import *
from lib.common.sutieConfig import *
from shutil import copyfile
from lib.common.logConfig import get_logger


class GraphPage(object):
    def __init__(self, dashboard, enable_advance):
        self.dashboard = dashboard

        # init logger
        self.logger = get_logger(__file__, enable_advance)

    def create_highchart_theme(self):
        copyfile(os.path.join(TEMPLATE_DIR, JS_DIR, THEME_TEMP_JS), os.path.join(BUILD_DIR, JS_DIR, THEME_TEMP_JS))

    def create_set_css(self):
        copyfile(os.path.join(TEMPLATE_DIR, CSS_DIR, SET_TEMP_CSS), os.path.join(BUILD_DIR, CSS_DIR, SET_TEMP_CSS))

    def write_data_for_case(self, outfile_js, case_name, machine, browser):
        outfile_js.write('\t\tname: \'{}\',\n'.format(browser))
        outfile_js.write('\t\tdata: [\n')
        for _time in sorted(self.dashboard.value_ds[case_name][machine][browser].keys()):
            for value in sorted(self.dashboard.value_ds[case_name][machine][browser][_time]):
                _t = datetime.datetime.strptime(_time, "%Y-%m-%d %H-%M-%S-000000") + datetime.timedelta(hours=8)
                _y = _t.year
                _m = _t.month - 1
                _d = _t.day
                outfile_js.write('\t\t\t[Date.UTC({}, {}, {}), {}],\n'.format(_y, _m, _d, value))
        outfile_js.write('\t\t]')

    def create_case_data_js(self, machine, set_name):
        for counter, case_name in enumerate(set_contain[set_name]):
            create_js_path = os.path.join(BUILD_DIR, JS_DIR, '{}_{}.js'.format(case_name[:-7], machine[:-3]))
            with open(create_js_path, 'w') as outfile_js, open(os.path.join(TEMPLATE_DIR, JS_DIR, SET_DATA_TEMP_JS),
                                                               'r') as infile_js:
                for row_js in infile_js:
                    if '{{CHART_TITLE_SHOWN}}' in row_js:
                        create_title = '{}_{}'.format(case_name[:-7], machine[:-3])
                        outfile_js.write(row_js.replace('{{CHART_TITLE_SHOWN}}', create_title))
                    elif 'CASE_VAR_NAME' in row_js:
                        create_case_name = '{}_{}'.format(case_name[:-7], machine[:-3])
                        outfile_js.write(row_js.replace('CASE_VAR_NAME', create_case_name))
                    elif 'CASE_FIREFOX_DATA' in row_js:
                        self.write_data_for_case(outfile_js, case_name, machine, 'firefox')
                    elif 'CASE_CHROME_DATA' in row_js:
                        self.write_data_for_case(outfile_js, case_name, machine, 'chrome')
                    else:
                        outfile_js.write(row_js)

    def get_td_color(self, f_num, total):
        color = {'red': '#bd1550', 'green': '#75D701', 'yellow': '#E8A317'}
        if f_num > total or f_num <= 0:
            ret = color['red']
        elif f_num == total:
            ret = color['green']
        else:
            ret = color['yellow']
        return ret

    def print_footer_td_output(self, _print, f_num, total, outfile):
        line = '<td style="color: {}">{}</td>'.format(self.get_td_color(f_num, total), _print)
        outfile.write(line)

    def render_footer_table(self, machine, outfile):
        _m = machine
        _rt = self.dashboard.ref_date
        shorten_browser = {'firefox': 'F', 'chrome': 'C'}
        for _sk in sorted(suite_contain.keys()):
            total_case = len(suite_contain[_sk])
            for _b in BROWSER_SET:
                _print = ''
                skb_count = 0
                _print += shorten_browser[_b]
                for _s in sorted(suite_contain[_sk]):
                    if _rt in self.dashboard.count_ds[_s][_m][_b].keys():
                        _print += str(self.dashboard.count_ds[_s][_m][_b][_rt])
                        if self.dashboard.count_ds[_s][_m][_b][_rt] >= 6:
                            skb_count += 1
                    else:
                        _print += '-'
                self.print_footer_td_output(_print, skb_count, total_case, outfile)

    def create_set_html(self, machine, set_name):
        set_html_file = '{}_{}_set.html'.format(set_name, machine)
        set_html_dir = os.path.join(BUILD_DIR, set_html_file)
        self.dashboard.set_page_dict[machine][set_name] = set_html_file
        with open(set_html_dir, 'w') as outfile, open(os.path.join(TEMPLATE_DIR, SET_TEMP_HTML), 'r') as infile:
            for row in infile:
                if '{{TITLE_NAME}}' in row:
                    outfile.write(row.replace('{{TITLE_NAME}}', 'Hasal_{}_{}'.format(set_name, machine)))

                elif '<!--TIME CHART JS CODE ADD HERE-->' in row:
                    for counter, case_name in enumerate(set_contain[set_name]):
                        outfile.write(
                            '\t<script language="JavaScript" src="./js/{}_{}.js"></script>\n'.format(case_name[:-7],
                                                                                                     machine[:-3]))
                        outfile.write('\t<script language="JavaScript">\n')
                        outfile.write(
                            "\t\t$(function () {{Highcharts.chart('container{}', {}_{});}});\n".format(counter + 1,
                                                                                                       case_name[:-7],
                                                                                                       machine[:-3]))
                        outfile.write('\t</script>\n')

                elif '<!--GAUGE JS CODE ADD HERE-->' in row:
                    for m in MACHINE_SET:
                        outfile.write(
                            '\t<script language="JavaScript" src="./js/{}_gauge.js"></script>\n'.format(m[:-3]))
                        outfile.write(
                            '\t<script language="JavaScript">$(function() {{$(\'#container-{}\').highcharts(\
                            {}_gauge_data);}});</script>\n'.format(m[:-3], m[:-3]))

                elif '{{REFRESH_TIME}}' in row:
                    now = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
                    outfile.write(row.replace('{{REFRESH_TIME}}', '{}'.format(now)))

                elif '{{LATEST_DATA_TIME}}' in row:
                    ref_date = self.dashboard.ref_date
                    outfile.write(row.replace('{{LATEST_DATA_TIME}}', '{}').format(ref_date))

                elif '<!--WIN8 TD GO HERE-->' in row:
                    self.render_footer_table('windows8-64', outfile)

                elif '<!--WIN10 TD GO HERE-->' in row:
                    self.render_footer_table('windows10-64', outfile)

                else:
                    outfile.write(row)

    def get_overall_working_progress(self, machine):
        total_jobs = 0
        finished_jobs = 0
        for _s in self.dashboard.count_ds.keys():
            for _b in self.dashboard.count_ds[_s][machine].keys():
                total_jobs += 6

                # check time
                # latest_date = sorted(self.count_ds[_s][machine][_b].keys(),reverse=True)[0]
                # finished_jobs += self.count_ds[_s][machine][_b][latest_date]
                r_date = self.dashboard.ref_date
                if r_date not in self.dashboard.count_ds[_s][machine][_b].keys():
                    # TODO:must alert
                    pass
                else:
                    for date in self.dashboard.count_ds[_s][machine][_b].keys():
                        if r_date in date:
                            finished_jobs += self.dashboard.count_ds[_s][machine][_b][date]
        return finished_jobs * 100 / total_jobs

    def create_gauge_js(self, machine):
        percentage = self.get_overall_working_progress(machine)
        create_js = os.path.join(BUILD_DIR, JS_DIR, '{}_gauge.js'.format(machine[:-3]))
        with open(create_js, 'w') as outfile, open(os.path.join(TEMPLATE_DIR, JS_DIR, GAUGE_TEMP_JS), 'r') as infile:
            for row in infile:
                if 'GAUGE_MACHINE_VAR' in row:
                    outfile.write(row.replace('GAUGE_MACHINE_VAR', '{}_gauge_data'.format(machine[:-3])))
                elif '{{MACHINE}}' in row:
                    outfile.write(row.replace('{{MACHINE}}', machine[:-3]))
                elif '{{PERCENTAGE}}' in row:
                    outfile.write(row.replace('\'{{PERCENTAGE}}\'', '[{}]'.format(percentage)))
                else:
                    outfile.write(row)

    def create_page(self):
        self.create_highchart_theme()
        self.create_set_css()

        # create web_page with machine
        for m in MACHINE_SET:
            for set_name in set_contain.keys():
                self.create_set_html(m, set_name)
                self.create_case_data_js(m, set_name)
                self.create_gauge_js(m)
