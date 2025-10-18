# GitHub Pages Deployment Instructions

Your Cubic Labs website is now configured for GitHub Pages! 🚀

## ✅ What's Been Done:

1. ✅ Configured Next.js for static export
2. ✅ Added GitHub Actions workflow for automatic deployment
3. ✅ Fixed ESLint errors
4. ✅ Pushed all changes to GitHub

## 📋 Enable GitHub Pages (Do This Now):

### Step 1: Go to Repository Settings
Visit: https://github.com/shaffayqazi/cubic-labs/settings/pages

### Step 2: Configure GitHub Pages
1. **Source:** Select **"GitHub Actions"** from the dropdown
2. The workflow will automatically trigger and deploy

### Step 3: Wait for Deployment
- Go to: https://github.com/shaffayqazi/cubic-labs/actions
- Watch the "Deploy to GitHub Pages" workflow run (takes ~2-3 minutes)
- Once complete, your site will be live!

## 🌐 Your Live Website URL:

**https://shaffayqazi.github.io/cubic-labs**

## 🔄 Automatic Deployments:

Every time you push to the `main` branch, GitHub Actions will:
1. Build your Next.js app
2. Export static files
3. Deploy to GitHub Pages automatically

## 📝 Future Updates:

To update your website:
```bash
# Make your changes
git add .
git commit -m "Your update message"
git push origin main
```

GitHub Actions will automatically rebuild and redeploy! ⚡

## 🎨 Features Deployed:

✅ 8 Color themes with live switcher
✅ AI Agents carousel
✅ Responsive header with blur effect
✅ Theme persistence
✅ Smooth animations
✅ Mobile-optimized

## 🐛 Troubleshooting:

If deployment fails:
1. Check Actions tab: https://github.com/shaffayqazi/cubic-labs/actions
2. Click on the failed workflow to see logs
3. Common fixes:
   - Wait a few minutes and try again
   - Check if Pages is enabled in Settings
   - Ensure the workflow has proper permissions

## 📸 Next Steps:

1. ✅ Enable GitHub Pages (follow Step 1-3 above)
2. 📱 Test your live site
3. 📷 Take screenshots for the README
4. 🎉 Share your beautiful AI agency website!

---

Need help? Open an issue at: https://github.com/shaffayqazi/cubic-labs/issues
