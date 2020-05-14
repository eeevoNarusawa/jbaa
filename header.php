<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>/reset.min.css">
    <link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>/css/default.css?2020041401">
    <link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>/css/lightbox.css">
    <link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/image/favicon.ico"/>
    <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet">
    <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
    <meta name="description" itemprop="description" content="<?php bloginfo('description'); ?>">
    <meta name="format-detection" content="telephone=no">
    <title><?php wp_title( '|', true, 'right' ); bloginfo('name'); ?></title>
    <!-- Canonical -->
    <?php if ( is_home() ) {
      $canonical_url=get_bloginfo('url')."/";
    } else if (is_category()) {
      $canonical_url=get_category_link(get_query_var('cat'));
    } else if (is_page()||is_single()) {
      $canonical_url=get_permalink();
    } if ( $paged >= 2 || $page >= 2) {
      $canonical_url=$canonical_url.'page/'.max( $paged, $page ).'/';
    } ?>
    <?php if(!(is_404())):?>
      <link rel="canonical" href="<?php echo $canonical_url; ?>" />
    <?php endif;?>
    <?php wp_head(); ?>
  </head>

  <body>
    <div class="wrapper">
      <main>
        <header>
          <div class="logo"><a href="/"><img src="<?php bloginfo('stylesheet_directory'); ?>/image/logo.png" alt="JBAA Japan Business Ability Authorize Association"></a></div>
        </header>
