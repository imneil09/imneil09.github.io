import 'package:flutter/material.dart';
import 'config/themes.dart';
import 'pages/home_page.dart';
import 'widgets/theme_inherited_widget.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ThemeSwitcherWidget(
      initialDarkModeOn: false,
      child: NeilsOutlet(),
    );
  }
}
class NeilsOutlet extends StatelessWidget {
  const NeilsOutlet({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Sagar Bhowmik',
      theme:ThemeSwitcher.of(context).isDarkModeOn?darkTheme(context):lightTheme(context),
      home: HomePage(),
    );
  }
}