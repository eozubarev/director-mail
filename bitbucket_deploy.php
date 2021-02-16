<?php

$repo_dir = '/home/director.ecomaster.ru';
//$repo_sources = '/home/wisewater/runxin.info/sources/build';
// Full path to git binary is required if git is not in your PHP user's path. Otherwise just use 'git'.
$git_bin_path = 'git';

$update = false;

// Parse data from Bitbucket hook payload
if (!empty($_POST['payload'])) {
    $payload = json_decode($_POST['payload']);
    file_put_contents('deploy.log', serialize($_POST['payload']), FILE_APPEND);
} else {
    $payload = null;
}
$branch = '';
if (empty($payload->commits)) {
    // When merging and pushing to bitbucket, the commits array will be empty.
    // In this case there is no way to know what branch was pushed to, so we will do an update.
    $update = true;
} else {
    foreach ($payload->commits as $commit) {
        $branch = empty($commit->branch) ? '' : $commit->branch;
        if ($branch === 'master' || isset($commit->branches) && in_array('master', $commit->branches)) {
            $update = true;
            break;
        }
    }
}

if ($update) {
    // Do a git checkout to the web root
    $result = shell_exec('cd ' . $repo_dir . ' && ' . $git_bin_path . ' pull');
//    exec('cd ' . $repo_dir . ' && GIT_WORK_TREE=' . $web_root_dir . ' ' . $git_bin_path  . ' checkout -f');

    // Log the deployment
    $commit_hash = shell_exec('cd ' . $repo_dir . ' && ' . $git_bin_path . ' rev-parse --short HEAD');
    file_put_contents('deploy.log',
        date('m/d/Y h:i:s a') . " Deployed branch: " . $branch . " Result:" . $result . " Commit: " . $commit_hash . "\n",
        FILE_APPEND);
}

?>
