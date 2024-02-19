<?php

/*Remove WordPress menu from admin bar*/
add_action( 'admin_bar_menu', 'remove_wp_logo', 999 );
function remove_wp_logo( $wp_admin_bar ) {
  $wp_admin_bar->remove_node( 'wp-logo' );
}

function bellaworks_setup() {
  /*
   * Make theme available for translation.
   * Translations can be filed in the /languages/ directory.
   * If you're building a theme based on bellaworks, use a find and replace
   * to change 'bellaworks' to the name of your theme in all the template files.
   */
  load_theme_textdomain( 'bellaworks', get_template_directory() . '/languages' );

  // Add default posts and comments RSS feed links to head.
  add_theme_support( 'automatic-feed-links' );

  /*
   * Let WordPress manage the document title.
   * By adding theme support, we declare that this theme does not use a
   * hard-coded <title> tag in the document head, and expect WordPress to
   * provide it for us.
   */
  add_theme_support( 'title-tag' );

  /*
   * Enable support for Post Thumbnails on posts and pages.
   *
   * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
   */
  add_theme_support( 'post-thumbnails' );

  // This theme uses wp_nav_menu() in one location.
  // register_nav_menus( array(
  //   'primary' => esc_html__( 'Primary', 'bellaworks' ),
  //   'footer' => esc_html__( 'Footer', 'bellaworks' ),
  //   'sitemap' => esc_html__( 'Sitemap', 'bellaworks' ),
  // ) );

  /*
   * Switch default core markup for search form, comment form, and comments
   * to output valid HTML5.
   */
  add_theme_support( 'html5', array(
    'search-form',
    'comment-form',
    'comment-list',
    'gallery',
    'caption',
  ) );

  // Add theme support for Custom Logo.
  add_theme_support( 'custom-logo', array(
    'width'       => 250,
    'height'      => 250,
    'flex-width'  => true,
    'flex-height' => true,
  ) );

  add_theme_support( 'align-wide' );
}
add_action( 'after_setup_theme', 'bellaworks_setup' );

add_action( 'customize_register', 'sitefavicon_customizer_setting' );
function sitefavicon_customizer_setting( $wp_customize ) {
  $wp_customize->add_setting(
    'favicon',
    array(
      'default'    => '',
      'type'     => 'option',
      'capability' => 'edit_theme_options'
    ),
  );
}


add_action( 'admin_head', 'action_admin_style_2020' );
function action_admin_style_2020(){ ?>
  <link rel="stylesheet" type="text/css" href="<?php echo get_bloginfo('template_url') ?>/css/dashicons.min.css">
<?php }


